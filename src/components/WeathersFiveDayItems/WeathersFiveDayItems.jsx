import React from 'react';
import WeathersFiveDayListItems from './WeathersFiveDayListItems/WeathersFiveDayListItems'

const WeathersFiveDayItems = props => {
    const {daysFilter, dayDate} = props;
    const dayString = props => {
        return (
            <div>
                {new Date(props * 1000).toLocaleDateString()}
                <h3>{new Date(props * 1000).toLocaleString('en-Ua',{weekday:'long'})}</h3>
            </div>

        )
    };
    
    return (
        <div className='weatherFiveDayItems'>
            {dayDate.map((item, index) =>{
                return(
                    <ul key={index}>
                        {dayString(item.dt)}
                            {daysFilter(index).map(listItem =>{
                                 return(
                                    <WeathersFiveDayListItems
                                        listItem={listItem}
                                        key={listItem.dt}
                                    />
                                )
                            }
                        )}
                    </ul>

                )
            })}
        </div>
    )
};

export default WeathersFiveDayItems;