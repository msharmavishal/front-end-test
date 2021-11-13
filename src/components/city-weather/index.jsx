import useFetch from "../../hooks/useFetch";

const CityWeather = ({ city, currentWeatherIcon, tempF, tempC, humidity }) => {

    const { response: {current = {}} = {}, loading, error } = useFetch(`current.json?q=${city}`)
    // console.log({ response, loading, error })
    return <div style={{
        padding: 20,
        border: "1px solid",
        borderRadius: 8
    }} >
        <p>{city}</p>
        {loading ? <p>Loading...</p> : <>
            <img src={current.condition?.icon} alt="current weather" />
            <div>
                <p>Temp: {current.temp_f}f {current.temp_c}c</p>
                <p>Humidity: {current.humidity}</p>
            </div>
        </>}

    </div>
}

export default CityWeather;