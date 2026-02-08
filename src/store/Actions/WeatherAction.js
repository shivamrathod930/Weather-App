import {
     FETCH_CURRENT_SUCCESS,
     FETCH_FORCAST_SUCCESS,
     FETCH_WEATHER_PENDING,
     FETCH_WEATHER_ERROR,
     SET_CITY
} from '../constanc/WeatherConstanc'
import axios from 'axios'

const API = import.meta.env.VITE_WEATHER_API_KEY



export const fetchCurrentSuccess = (data) => {
     return {
          type: FETCH_CURRENT_SUCCESS,
          payload: data
     }
}

export const fetchForcastSuccess = (data) => {
     return {
          type: FETCH_FORCAST_SUCCESS,
          payload: data
     }
}

export const fetchWeatherPendng = () => {
     return {
          type: FETCH_WEATHER_PENDING,
     }
}

export const fetchweatherError = (error) => {
     return {
          type: FETCH_WEATHER_ERROR,
          payload: error,
     }
}

export const setcity = (city) => {
     return {
          type: SET_CITY,
          payload: city,
     }
}

export const fetchweather = (city) => {
     return async (dispatch) => {
          const currentWeather = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)

           const forcastWeather = await axios(`https://pro.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}`)

           dispatch(fetchCurrentSuccess(currentWeather.data))
           dispatch(fetchForcastSuccess(forcastWeather.data))

     }
}