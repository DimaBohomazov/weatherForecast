import React from 'react';

function WeathersFiveDayListItems(props) {
    const {listItem} = props
    return (
        <li>
            {listItem.dt_txt}
        </li>

    );
}

export default WeathersFiveDayListItems;