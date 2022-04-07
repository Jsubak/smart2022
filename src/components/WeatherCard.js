import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { weather_mapping_data } from "../dataset/WeatherData"

function WeatherCard(props) {
    const {weatherData, apiError} = props;
    const markeWeatherInfo = () => {
        const {temp, temp_min, temp_max, feels_like, humidity} = weatherData.main;
        const {main, icon} = weatherData.weather[0];
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        const parseWeatherData = weather_mapping_data[main] ? weather_mapping_data[main] : weather_mapping_data["Etc"];

        return <Grid item xs={1} sm={2} md={4}>
            <Typography>{`현재날씨: ${parseWeatherData.name}`}</Typography>
            <parseWeatherData.icon sx={{fontSize: 100, color: 'red'}} />
            <img src={iconUrl} alt="현재날씨 아이콘" />
            <Typography>{`현재온도: ${temp}℃ 체감온도: ${feels_like}℃`}</Typography>
            <Typography>{`최저기온: ${temp_min}℃ 최고기온: ${temp_max}℃ 습도: ${humidity}%`}</Typography>
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