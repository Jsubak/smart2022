import dog from './images.jpg';
import './App.css';
import { faker } from '@faker-js/faker';


// JSX
const testData = [
  {
    text: "헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다.",
    imgUrl: "https://blog.kakaocdn.net/dn/nPV8F/btqFjcUMxgD/kuKhzTe5vpFubOddP3tDD1/img.jpg"
  },{
    text :"사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를 창설할 수 없다.",
    imgUrl: "https://i.pinimg.com/236x/8c/ae/01/8cae01232ca1ab2d68b8a9d63c7014ae.jpg"
  },{
    text: "국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다.",
    imgUrl: "https://i.pinimg.com/originals/02/82/fe/0282fee3be5e61bb6b0b7b6cfbc079e9.jpg"
  }
]

function App() {
  const h1Element = <h1>h1 제목 태크 입니다.</h1>;
  const imgElement = <img src={dog} className="App-logo" alt="logo" />

  return (
    <div className="App">
      <header className="App-header">
        { h1Element }
        { imgElement }
        <p>
          한글로 바꿔보세요. <code>src/App.js</code> and save to reload.
        </p>
          {testData.map((contents)=>{
            return <div>
              <img src={faker.image.avatar()} alt="강아지 사진" />
              {contents.text}
              <img src={faker.image.cats()} alt="고양이 사진" />
            </div>
          })}
      </header>
    </div>
  );
}

export default App;
