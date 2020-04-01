import axios from "axios";
import {weatherApiLink} from "../../utils/api"
import {getBackStyle} from "./background"
import {
    FETCH_WEATHERS_START,
    FETCH_WEATHERS_SUCCESS,
    FETCH_WEATHERS_ERROR,
    SET_CITY_NAME,
    FETCH_WEATHERS_SUCCESS_FIVE_DAYS
} from "./actionTypes"

export function setCityName(cityName) {
    return{
        type: SET_CITY_NAME,
        cityName
    }
}

export function fetchWeathers() {
    return async (dispatch, getState) => {
        dispatch(fetchWeathersStart())
        const stateCityName = getState().weathers.cityName
        try{
            const response = await axios.get(weatherApiLink('weather', stateCityName))
            const data = response.data

            dispatch(fetchWeathersSuccess(data))
            dispatch(getBackStyle())
        } catch(e) {
            dispatch(fetchWeathersError(e))
        }
    }
}
export function fetchWeathersStart() {
    return{
        type: FETCH_WEATHERS_START
    }
}
export function fetchWeathersSuccess(data) {
    return{
        type: FETCH_WEATHERS_SUCCESS,
        weatherConditions: data.weather[0],
        weatherMain: data.main,
        wind: data.wind,
        systemData: data.sys,
    }


}
export function fetchWeathersError(e) {
    return{
        type: FETCH_WEATHERS_ERROR,
        error: e
    }
}

export function fetchWeathersFiveDays() {
    return async (dispatch, getState) => {
        dispatch(fetchWeathersStart())
        const stateCityName = getState().weathers.cityName
        try{
            const response = await axios.get(weatherApiLink('forecast', stateCityName))
            const data = response.data
            dispatch(fetchWeathersSuccessFiveDays(data))
            dispatch(getBackStyle())
        } catch(e) {
            dispatch(fetchWeathersError(e))
        }
    }
}

export function fetchWeathersSuccessFiveDays(data) {
    return{
        type: FETCH_WEATHERS_SUCCESS_FIVE_DAYS,
        cityDataFiveDays: data.city,
        weatherInfoFiveDays: data.list,
        
    }

}