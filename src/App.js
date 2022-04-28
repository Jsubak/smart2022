import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import WeatherCard from './components/WeatherCard';
import UserCardList from './components/UserCardList';
import { makeUserDatas } from './Utils';


const userDatas = makeUserDatas(5000);


function App() {
  const [useDarkMode, setUseDarkMode] = useState(true);
  
  const handleChange = (event) => {
    console.log(event);
    setUseDarkMode(event.target.checked);
    // setUseDarkMode(useDarkMode ? false : true);
  }

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
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs:4, sm: 8, md: 12 }}>
            {[1,2,3,4,5,6,7,8,9].map((no) =>{return <WeatherCard id={no} />})}
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
