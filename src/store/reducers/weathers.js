import {
    FETCH_WEATHERS_START,
    FETCH_WEATHERS_SUCCESS,
    FETCH_WEATHERS_ERROR,
    SET_CITY_NAME,
    FETCH_WEATHERS_SUCCESS_FIVE_DAYS
} from "../actions/actionTypes"

const initialState ={
    weatherMain: [],
    weatherConditions: [],
    wind: [],
    systemData: [],
    cityName: 'Kharkov',
    loading: false,
    error: null,
    cityDataFiveDays: [],
    weatherInfoFiveDays: []
}

export default function weathersReducer(state=initialState, action) {
    switch(action.type){
        case FETCH_WEATHERS_START:
            return{
                ...state, loading: true
            }
        case FETCH_WEATHERS_SUCCESS:
            return{
                ...state,
                loading: false,
                weatherConditions: action.weatherConditions,
                weatherMain: action.weatherMain,
                wind: action.wind,
                systemData: action.systemData,
                error: null
            }
        case FETCH_WEATHERS_ERROR:
            return{
                ...state, loading: false, error: action.error
            }
        case FETCH_WEATHERS_SUCCESS_FIVE_DAYS:
            return{
                ...state,
                loading: false,
                systemData: action.cityDataFiveDays,
                weatherInfoFiveDays: action.weatherInfoFiveDays,
                error: null
            }
        case SET_CITY_NAME:
            return{
                ...state, cityName: action.cityName
            }
        default:
            return state
    }
}