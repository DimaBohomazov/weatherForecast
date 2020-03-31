import {
    ADD_STYLE
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
        default:
            return state
    }
}