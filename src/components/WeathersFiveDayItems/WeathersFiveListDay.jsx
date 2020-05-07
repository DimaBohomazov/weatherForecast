import React from 'react';
import WeatherFiveListHours from './WeatherFiveListHours/WeatherFiveListHours'

class WeathersFiveListDay extends React.Component{
    render() {
        const {daysFilter, dayDate} = this.props;
        return (
            <div className='weatherFiveDayItems'>
                {dayDate.map((item, index) =>{
                    return(
                        <div
                            className="five-days-container"
                            key={item.dt}>
                            <WeatherFiveListHours
                                dayIndex={index}
                                date={item.dt}
                                daysFilter={daysFilter}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }


};

export default WeathersFiveListDay;