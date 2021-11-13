import axios from "axios";

const { REACT_APP_API_KEY, REACT_APP_API_DOMAIN } = process.env;

const customInstance = axios.create({
    baseURL: REACT_APP_API_DOMAIN,
});

customInstance.defaults.headers.get["Content-Type"] = "application/json";
customInstance.defaults.headers.patch["Content-Type"] = "application/json";

customInstance.interceptors.request.use(function (config) {
    let _config = { ...config }
    const [urlWithoutQueryParams, queryParams] = config.url.split("?")
    _config.url = `${urlWithoutQueryParams}?key=${REACT_APP_API_KEY}&${queryParams}`
    return _config;
});

customInstance.interceptors.response.use(
    function (response) {
        if (Math.floor(response.status / 100) === 2) {
            return response.data;
        } else {
            return Promise.reject(response.data);
        }
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default customInstance;