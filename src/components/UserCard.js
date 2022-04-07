import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import { getRandomInt } from '../Utils';

function UserCard(props) {
    const {userData, idx} = props;
    const [fontColor, setFontColor] = useState(null);

    useEffect(()=> {
      const changeFontColor = () => {
        setFontColor(`rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`)
      }

      setInterval(changeFontColor, 1000);
    },[])

    return <div key={idx}>
      <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image= {userData.avatar}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color={fontColor}>
              {userData.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">  
              {userData.jobTitle}
            </Typography>
            <Typography gutterBottom component="div" color={fontColor}>
              email : {userData.email} <br/>
              phone : {userData.phoneNumber}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              music : {userData.music} <br/>
              address : {userData.address}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
}

export default UserCard;
