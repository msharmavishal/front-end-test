import useFetch from "../../hooks/useFetch";
import CityWeather from "../../components/city-weather";

const CityWrapper = ({ city }) => {

    const { response: { current = {} } = {}, loading, error } = useFetch(`current.json?q=${city}`)

    return <CityWeather
        loading={loading}
        error={error}
        city={city}
        currentWeatherIcon={current.condition ?.icon}
        tempF={current.temp_f}
        tempC={current.temp_c}
        humidity={current.humidity}
    />

}

export default CityWrapper;