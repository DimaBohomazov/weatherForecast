import {
    ADD_STYLE,
    // ADD_AFTERNOON_STYLE,
    // ADD_EVENING_STYLE,
    // ADD_SUNRISE_STYLE,
    // ADD_NIGHT_STYLE
} from "../actions/actionTypes"

const initialState = {
    backStyle: ''
}

export default function backgroundReducer(state = initialState, action) {
    switch(action.type){
        case ADD_STYLE:
            return{
                ...state, backStyle: action.backStyle
            }
        // case ADD_AFTERNOON_STYLE:
        //     return{
        //         ...state, backStyle: action.backStyle
        //     }
        // case ADD_EVENING_STYLE:
        //     return{
        //         ...state, backStyle: action.backStyle
        //     }
        // case ADD_SUNRISE_STYLE:
        //     return{
        //         ...state, backStyle: action.backStyle
        //     }
        // case ADD_NIGHT_STYLE:
        //     return{
        //         ...state, backStyle: action.backStyle
        //     }
        default:
            return state
    }
}