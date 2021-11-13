import useFetch from "../../hooks/useFetch";
import CityWeather from "../../components/city-weather";
import {useNavigate} from 'react-router-dom';

const CityWrapper = ({ city }) => {

    const navigate = useNavigate();

    const { response: { current = {} } = {}, loading, error } = useFetch(`current.json?q=${city}`)

    const onClickHandler = () => {
        navigate(`/forecast/${city}`)
    }

    return <CityWeather
        onClick={onClickHandler}
        loading={loading}
        error={error}
        city={city}
        currentWeatherIcon={current.condition?.icon}
        tempF={current.temp_f}
        tempC={current.temp_c}
        humidity={current.humidity}
    />

}

export default CityWrapper;