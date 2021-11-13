const CityWeather = ({city, currentWeatherIcon, tempF, tempC, humidity}) => {
    return <div style={{
        padding: 20,
        border: "1px solid",
        borderRadius: 8
    }} >
        <p>{city}</p>
        <img src={currentWeatherIcon} alt="current weather" />
        <div>
            <p>Temp: {tempF}f {tempC}c</p>
            <p>Humidity: {humidity}</p>
        </div>
    </div>
}

export default CityWeather;