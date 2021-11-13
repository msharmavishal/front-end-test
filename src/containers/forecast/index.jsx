import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import { Grid } from "@mui/material";
import ForecastCard from "../../components/forecast-card";

const Forcast = () => {

    const { city } = useParams();
    const { response: { forecast: { forecastday = [] } = {} } = {}, loading, error } = useFetch(`forecast.json?q=${city}&days=3&aqi=no&alerts=no`)

    return <div>
        <p>{city}</p>

        <Grid container spacing={4} >
            {forecastday.map(({ date, day }, index) => <Grid key={index} item md={4} >
                <ForecastCard
                    date={date}
                    loading={loading}
                    error={error}
                    currentWeatherIcon={day.condition.icon}
                    tempC={day.avgtemp_c}
                    tempF={day.avgtemp_f}
                    humidity={day.avghumidity} />
            </Grid>)}
        </Grid>
    </div>
}

export default Forcast;