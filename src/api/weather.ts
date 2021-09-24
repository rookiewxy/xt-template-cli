import axios from 'axios'

export const getLiveWeather = () => {
    return axios.get('https://restapi.amap.com/v3/weather/weatherInfo?key=ab5bc8e5247593b0f500909d0b323d96&city=330881&extensions=base')
}

export const getForecastWeather = () => {
    return axios.get('https://restapi.amap.com/v3/weather/weatherInfo?key=ab5bc8e5247593b0f500909d0b323d96&city=330881&extensions=all')
}