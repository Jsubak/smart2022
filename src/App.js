import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

import { cityLatLon } from './dataset/WeatherData';
import WeatherCard from './components/WeatherCard';
import UserCardList from './components/UserCardList';
import { makeUserDatas } from './Utils';


const userDatas = makeUserDatas(5000);


function App() {
  const [useDarkMode, setUseDarkMode] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [selectedCityData, setSelectedCityData] = useState({name: "안양", lat: 37.39692, lon: 126.91425});

  const handleChange = (event) => {
    console.log(event);
    setUseDarkMode(event.target.checked);
    // setUseDarkMode(useDarkMode ? false : true);
  }

  const selectHandleChange = (event) => {
    /* const cityName = (event.target.value); const findCityLatLon = cityLatLon.find(element => element.name === cityName);*/
    const cityName = cityLatLon.find(data => data.name === event.target.value);
    setSelectedCityData(cityName);
  }

/*  useEffect(() => {
    
  }, []); */

  useEffect(() => {
    const callApi = async() => {
      try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityData.lat}&lon=${selectedCityData.lon}&lang=kr&units=metric&appid=f2e4e12af2997b3bacce4b18f9aedd05`)
        setWeatherData(result.data);
      }catch(err){
        setApiError(err);
      }
    }
    callApi()
    console.log("commponent did mount");
  }, [selectedCityData])

  useEffect(() => {
    console.log(`theme 변경됨 -> ${useDarkMode}`);
  }, [useDarkMode])

  console.log("rendedadr")

  return (
    <ThemeProvider theme={createTheme({
        palette: {
          mode: useDarkMode? 'dark' : 'light',
        },
      })
    }>
      <Box sx={{
        minHeight: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,
      }}>
        <Container maxWidth="lg" sx={{p:1}}>
          <FormControl>
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
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs:4, sm: 8, md: 12 }}>
            <WeatherCard weatherData={weatherData} apiError={apiError} />
            <WeatherCard weatherData={weatherData} apiError={apiError} />
            <WeatherCard weatherData={weatherData} apiError={apiError} />
          </Grid>

          <Switch
            checked={useDarkMode}
            onChange={handleChange}
            color="secondary"
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <UserCardList userDatas={userDatas}/>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
