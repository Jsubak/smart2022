import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { weather_mapping_data, cityLatLon } from "../dataset/WeatherData"

function WeatherCard(props) {
    const { id } = props;
    const defaultCityName = localStorage.getItem(id+'_city') || "안양"
    const [weatherData, setWeatherData] = useState(null);
    const [apiError, setApiError] = useState(null);
    // cityLatLon.find(data=> data.name === props.cityName));

    const findCity = cityLatLon.find(data=> data.name === defaultCityName)
    const [selectedCityData, setSelectedCityData] = useState(findCity)

    const selectHandleChange = (event) => {
        /* const cityName = (event.target.value); const findCityLatLon = cityLatLon.find(element => element.name === cityName);*/
        const cityName = cityLatLon.find(data => data.name === event.target.value);
        setSelectedCityData(cityName);
        localStorage.setItem(id+'_city', cityName.name)
    }

    useEffect(() => {
        const callApi = async() => {
          // 현재시간 - 로컬스토리에 저장한 시간 = 로컬스토리지에 저장한 시간으로부터 흘러간 시간이 나옴
          // 흘러간 시간이 10분 미만이면 로컬스토리지에 저장한 날씨데이터를 활용
          // 흘러간 시간이 10분 이상이면 openAPI 호출
          const cityName = selectedCityData.name
          const cityGetDate = cityName+'_저장시간'
          if((Date.now() - localStorage.getItem(cityGetDate)) /1000 / 60 > 60) {
            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityData.lat}&lon=${selectedCityData.lon}&lang=kr&units=metric&appid=f2e4e12af2997b3bacce4b18f9aedd05`)
                setWeatherData(result.data);
                localStorage.setItem(cityName, JSON.stringify(result.data))
                localStorage.setItem(cityGetDate, Date.now()) // 현재 시간
            }catch(err){
              setApiError(err);
            }
          }else {
            setWeatherData(JSON.parse(localStorage.getItem(cityName)));
          }
        }
        callApi()
        console.log("commponent did mount");
    }, [selectedCityData])
    
    const markeWeatherInfo = () => {
        const {temp, temp_min, temp_max, feels_like, humidity} = weatherData.main;
        const {main, icon} = weatherData.weather[0];
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        const parseWeatherData = weather_mapping_data[main] ? weather_mapping_data[main] : weather_mapping_data["Etc"];

        return <Grid item xs={1} sm={2} md={4}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="selected-city-label">도시</InputLabel>
                <Select
                labelId="selected-city-label"
                id="selected-city"
                value={selectedCityData.name}
                label="도시"
                onChange={selectHandleChange}
                >
                {cityLatLon.map((city)=> 
                    <MenuItem value={city.name}>{city.name}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <Typography variant="h6" gutterBottom component="div">{`현재날씨: ${parseWeatherData.name}`}</Typography>
            <parseWeatherData.icon sx={{fontSize: 100, color: 'red'}} />
            <img src={iconUrl} alt="현재날씨 아이콘" />
            <Typography variant="subtitle1" gutterBottom component="div">{`현재온도: ${temp}℃ 체감온도: ${feels_like}℃`}</Typography>
            <Typography variant="subtitle1" gutterBottom component="div">{`최저기온: ${temp_min}℃ 최고기온: ${temp_max}℃`}</Typography>
            <Typography>{`습도: ${humidity}%`}</Typography>
        </Grid>
    }
    
    
    return <>
        { apiError ? 
            <Typography>{apiError.message}</Typography>
            :
            weatherData ?
                markeWeatherInfo()
                :
                <Typography>날씨정보 없음</Typography>
        }
    </>
}


export default WeatherCard;