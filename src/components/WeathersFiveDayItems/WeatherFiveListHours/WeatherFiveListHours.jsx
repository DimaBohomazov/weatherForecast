import React, {Component} from 'react';
import WeathersFiveDayListItems from './WeathersFiveDayListHoursItems/WeathersFiveDayListItems'
import InputRange from 'react-input-range'

class WeatherFiveListHours extends Component {
    state={
        value: 0
    }

    componentDidMount() {
        this.getValue()
    }

    dayString = props => {
        return (
            <div className='five-hours-date'>
                <div className='five-hours-date__numeric'>
                    {new Date(props * 1000).toLocaleDateString()}
                </div>
                <div className='five-hours-date__week-day'>
                    {new Date(props * 1000).toLocaleString('en-Ua',{weekday:'long'})}
                </div>
            </div>
        )
    };

    formatLabel = (value) => {
        const time = props =>
            new Date(props * 1000).toLocaleTimeString('ua', {hour: 'numeric', minute: 'numeric'} );
        return time(this.props.daysFilter(this.props.dayIndex)[value].dt)
    }

    getValue = () => {
        const index = this.props.dayIndex
        const length = this.props.daysFilter(index).length
        if(length === 1){
            document.getElementById(`input-${index}`).style.display = 'none'
            let el = document.createElement('div')
            el.innerText = this.formatLabel(this.state.value)
            document.querySelectorAll('.five-hours-date')[index].appendChild(el)
        } else if (length > 6){
            this.setState({
                value: 3
            })
        } else {
            const value = Math.floor((length - 1) / 2)
            this.setState({
                value
            })
        }
    }

    render() {
        const {dayIndex, date, daysFilter} = this.props
        return (
            <div>
                {this.dayString(date)}
                <div className="input" id={`input-${dayIndex}`}>
                    <InputRange
                        formatLabel={value => this.formatLabel(value)}
                        maxValue={daysFilter(dayIndex).length-1}
                        minValue={0}
                        value={this.state.value}
                        onChange={value=> this.setState({ value })}
                    />
                </div>
                <ul
                    className="five-hours-list"
                    key={dayIndex}>
                    {/*eslint-disable-next-line*/}
                    {daysFilter(dayIndex).map((listItem, index)=>{
                        if(this.state.value === index){
                            return(
                                <WeathersFiveDayListItems
                                    listItem={listItem}
                                    key={listItem.dt}
                                />
                                )
                            }
                        }
                    )}
                </ul>
            </div>
        );
    }
}


export default WeatherFiveListHours;