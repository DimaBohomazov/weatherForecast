import {
    ADD_STYLE
} from "./actionTypes"

export function getBackStyle() {
    return (dispatch, getState)=>{
        const now = new Date();
        const sunrise = new Date(getState().weathers.systemData.sunrise * 1000);
        const sunset = new Date(getState().weathers.systemData.sunset * 1000);
        if(now.getHours() > sunrise.getHours() + 1 && now.getHours() < 11 ){
            dispatch(setStyle('morning'))
        } else if(now.getHours() >= 11 && now.getHours() <= sunset.getHours()-1){
            dispatch(setStyle('afternoon'))
        } else if(now.getHours() >= sunset.getHours() && now.getHours() <= sunset.getHours() + 1 ){
            dispatch(setStyle('evening'))
        } else if(now.getHours() >= sunrise.getHours() && now.getHours() <= sunrise.getHours() + 1 ) {
            dispatch(setStyle('sunrise'))
        } else {
            dispatch(setStyle('night'))
        }
        const body = document.querySelector('body')
        body.classList.add(getState().background.backStyle)
        if(body.classList.item(1)){
            body.classList.remove(body.classList.item(0))
        }
    }
}
export function setStyle(style) {
    return{
        type: ADD_STYLE,
        backStyle: style
    }
}
