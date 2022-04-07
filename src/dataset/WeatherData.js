import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WavesIcon from '@mui/icons-material/Waves';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';

export const cityLatLon = [
    { name: "서울", lat: 37.532600, lon: 127.024612 },
    { name: "안양", lat: 37.39692, lon: 126.91425 },
    { name: "부산", lat: 35.17955, lon: 129.0756 },
    { name: "대전", lat: 36.35041, lon: 127.3845 },
    { name: "광주", lat: 35.15955, lon: 126.8526 },
    { name: "울산", lat: 35.5369316, lon: 129.3076936 },
    { name: "시흥", lat: 37.4836663, lon: 126.9269737 },
    { name: "파리", lat: 48.864716, lon: 2.349014},
    { name: "말레이시아", lat: 3.140853, lon: 101.693207}
]

export const weather_mapping_data = {
    Thunderstorm : {
        name: "폭우",
        icon: ThunderstormIcon
    },
    Drizzle : {
        name: "이슬비",
        icon: InvertColorsIcon
    },
    Rain : {
        name: "비",
        icon: UmbrellaIcon
    },
    Snow : {
        name: "눈",
        icon: AcUnitIcon
    },
    Atmosphere : {
        name: "안개",
        icon: WavesIcon
    },
    Clear : {
        name: "맑음",
        icon: WbSunnyIcon
    },
    Clouds : {
        name: "흐림",
        icon: FilterDramaIcon
    },
    Etc : {
        name: "예외",
        icon: WavesIcon
    }
}