import {
    ADD_STYLE,
    // ADD_AFTERNOON_STYLE,
    // ADD_EVENING_STYLE,
    // ADD_SUNRISE_STYLE,
    // ADD_NIGHT_STYLE
} from "./actionTypes"

export function getBackStyle() {
    return (dispatch, getState)=>{
        const now = new Date();
        const sunrise = new Date(getState().weathers.systemData.sunrise * 1000);
        const sunset = new Date(getState().weathers.systemData.sunset * 1000);
        if(now.getHours() > sunrise.getHours() + 1 && now.getHours() < 11 ){
            dispatch(setStyle('morning')) //body.classList.add('morning')
        } else if(now.getHours() >= 11 && now.getHours() <= sunset.getHours()-1){
            dispatch(setStyle('afternoon')) //body.classList.add('afternoon')
        } else if(now.getHours() >= sunset.getHours() && now.getHours() <= sunset.getHours() + 1 ){
            dispatch(setStyle('evening')) //body.classList.add('evening')
        } else if(now.getHours() >= sunrise.getHours() && now.getHours() <= sunrise.getHours() + 1 ) {
            dispatch(setStyle('sunrise')) //body.classList.add('sunrise')
        } else {
            dispatch(setStyle('night')) //body.classList.add('night')
        } 
        const body = document.querySelector('body')
        body.classList.add(getState().background.backStyle)
    }
}
export function setStyle(style) {
    return{
        type: ADD_STYLE,
        backStyle: style
    }
}
// export function addAfternoonStyle(style) {
//     return{
//         type: ADD_AFTERNOON_STYLE,
//         backStyle: style
//     }
// }
// export function addEveningStyle(style) {
//     return{
//         type: ADD_EVENING_STYLE,
//         backStyle: style
//     }
// }
// export function addSunriseStyle(style) {
//     return{
//         type: ADD_SUNRISE_STYLE,
//         backStyle: style
//     }
// }
// export function addNightStyle(style) {
//     return{
//         type: ADD_NIGHT_STYLE,
//         backStyle: style
//     }
// }