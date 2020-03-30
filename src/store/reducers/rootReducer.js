import {combineReducers} from "redux"
import weathersReducer from "./weathers"
import backgroundReducer from "./background"

export default combineReducers({
    weathers: weathersReducer,
    background: backgroundReducer
})