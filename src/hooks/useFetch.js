import { useEffect, useState } from "react"
import axios from "../config/network";

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true)
            try {
                const res = await axios.get(url)
                setResponse(res)
            } catch (e) {
                setError(e)
            }
            setLoading(false)
        }

        fetchWeather()
    }, [url])

    return { loading, error, response }
}

export default useFetch;