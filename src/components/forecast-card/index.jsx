import CityWeather from "../city-weather"

const ForecastCard = ({ loading, error, currentWeatherIcon, tempC, tempF, humidity, date }) => {
    return <CityWeather
        loading={loading}
        error={error}
        currentWeatherIcon={currentWeatherIcon}
        tempF={tempF}
        tempC={tempC}
        humidity={humidity}
        date={date}
        showCity={false}
    />
}

export default ForecastCard;