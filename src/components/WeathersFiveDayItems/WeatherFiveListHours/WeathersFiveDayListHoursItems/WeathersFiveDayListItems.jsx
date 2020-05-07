import React from 'react';

function WeathersFiveDayListItems(props) {
    const {listItem} = props;
    return (
        <li className='five-hours-item'>
            <div className='five-hours-item__main'>
                    <span>{Math.round(listItem.main.temp)}</span>  °C
            </div>
            <ul className='five-hours-item__container'>
                <li className='five-hours-item__info'>
                    Feels like: {Math.round(listItem.main.feels_like)} °C
                </li>
                <li className='five-hours-item__info'>
                    Humidity: {Math.round(listItem.main.humidity)} %
                </li>
                <li className='five-hours-item__info'>
                    Pressure: {Math.round(listItem.main.pressure)} hPa
                </li>
                <li className='five-hours-item__info'>
                    Wind: {Math.round(listItem.wind.speed)} m/s
                </li>
            </ul>
            <div className='five-hours-item__image'>
                <img
                    className='five-hours-item__icon'
                    src={`http://openweathermap.org/img/wn/${listItem.weather[0].icon}@2x.png`}
                    alt="description"
                    title={listItem.weather[0].description}/>
            </div>
        </li>
    );
}


export default WeathersFiveDayListItems;