import CityWeather from "../../components/city-weather";
import { CITY_LIST } from "../../constants/cityList";
import Grid from "@mui/material/Grid";

const Home = () => {
    return <div>
        <Grid container spacing={4} >
            {
                CITY_LIST.map((city, index) => <Grid item key={index} md={4}>
                    <CityWeather city={city} currentWeatherIcon={""} tempF={38} tempC={40} humidity={75} />
                </Grid>)
            }
        </Grid>
    </div>
}

export default Home;