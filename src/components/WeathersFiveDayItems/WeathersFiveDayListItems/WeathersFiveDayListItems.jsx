import React from 'react';

function WeathersFiveDayListItems(props) {
    const {listItem} = props

    const time = props =>
        new Date(props * 1000).toLocaleTimeString('ua', {hour: 'numeric', minute: 'numeric'} );
    const getClassLi = () => listItem.sys.pod === 'd' ? 'dayList' : 'nightList'
    return (
        <li className={getClassLi()}>
            <div >
                {time(listItem.dt)}
            </div>
            <div>
                <strong>{Math.ceil(listItem.main.temp)}</strong> °C
            </div>
                <img src={`http://openweathermap.org/img/wn/${listItem.weather[0].icon}.png`} alt="description"
                     title={listItem.weather[0].description}/>

        </li>

    );
}

export default WeathersFiveDayListItems;