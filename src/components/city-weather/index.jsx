const CityWeather = ({ loading, error, city, currentWeatherIcon, tempF, tempC, humidity, date, onClick, showCity = true }) => {

    return <div
        onClick={() => !!onClick && onClick()}
        style={{
            padding: 20,
            border: "1px solid",
            borderRadius: 8
        }} >
        {showCity ? <p>{city}</p> : <p>{date}</p>}
        {loading ? <p>Loading...</p> : <>
            <img src={currentWeatherIcon} alt="current weather" />
            <div>
                <p>Temp: {tempF}f {tempC}c</p>
                <p>Humidity: {humidity}</p>
            </div>
        </>}

    </div>
}

export default CityWeather;