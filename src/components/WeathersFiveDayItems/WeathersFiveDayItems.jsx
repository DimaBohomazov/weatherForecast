import React from 'react';
import WeathersFiveDayListItems from './WeathersFiveDayListItems/WeathersFiveDayListItems'

const WeathersFiveDayItems = props => {
    const {daysFilter, dayDate} = props;
    const dayString = props => {
        return (
            <div>
                <strong>{new Date(props * 1000).toLocaleString('en',{weekday:'long'})}</strong> &nbsp;
                {new Date(props * 1000).toLocaleDateString()}
            </div>

        )
    }
    
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


    /*{daysFilter(index).map(listItem =>{
            return(
                <WeathersFiveDayListItems
                    listItem={listItem}
                />
            )
        }
    )}*/

        /*<ul>
            <li>
                { listItem.dt }
            </li>
        </ul>*/

    )

}

export default WeathersFiveDayItems;