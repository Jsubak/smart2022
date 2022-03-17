import faker from '@faker-js/faker'; // 영문 버전
import faker_ko from '@faker-js/faker/locale/ko'; // 한글 버전
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './App.css';

function App() {
  const userDatas= [];

  while(userDatas.length < 10) {
    userDatas.push({
      avatar: faker.image.avatar(),
      name: `${faker_ko.name.lastName()}${faker_ko.name.firstName()}`,
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      phoneNumber: faker.phone.phoneNumber(),
      music: faker.music.genre(),
      address: faker.address.city()
    })
  }

  const userCards = userDatas.map((userData, idx) => {
    return <Card key= {idx} sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image= {userData.avatar}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {userData.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">  
              {userData.jobTitle}
            </Typography>
            <Typography gutterBottom component="div">
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
    
  //  <div key={idx}>
  //   <h4>{userData.jobTitle}</h4>
  //    <img src={userData.avatar} alt="사용자 프로필용 아바타" />
  //    <h5>{userData.name}</h5>
  //    {userData.email} <br/>
  //    {userData.phoneNo}
  //  </div>
  })

  return (
    <div className="App">
      {userCards}
    </div>
  );
}

export default App;
