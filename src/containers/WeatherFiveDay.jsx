import React from 'react';
import DateTime from "../components/UI/DateTime"
import Loader from "../components/UI/Loader"
import WeathersFiveDayItems from "../components/WeathersFiveDayItems/WeathersFiveDayItems"
import {connect} from "react-redux"
import {fetchWeathersFiveDays} from "../store/actions/weathers"

class WeatherFiveDay extends React.Component {
    componentDidMount() {
        this.props.fetchWeathersFiveDays()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cityName !== this.props.cityName) {
            this.props.fetchWeathersFiveDays()
        }
    }
    daysFilter = props => {
        let time = Date.parse(Date()) + 3*3600000 + (86400000 * props);
        return this.props.weatherInfoFiveDays.filter(item =>
            new Date(time).toLocaleDateString() === new Date(item.dt * 1000).toLocaleDateString())
    };
    dayDate = () => {
        let dayDate = [];
        for (let i = 0; i < 6; i++) {
            if(this.daysFilter(i)[0]) {
                dayDate.push(this.daysFilter(i)[0])
            }
        }
        return dayDate
    };
    
    render() {
        return (
            <div className='container-'>
                <header>
                    <h1 className='display-4' style={{textAlign: 'center'}}> {this.props.cityName} next time</h1>
                </header>
                {this.props.loading
                   ? <Loader />
                   :<React.Fragment>
                        <div>
                            <WeathersFiveDayItems
                                weatherInfo={this.props.weatherInfoFiveDays}
                                daysFilter={this.daysFilter}
                                dayDate={this.dayDate()}
                            />
                        </div>
                        <footer className='m-5'>
                            <DateTime
                                data = {this.props.cityDataFiveDays}
                            />
                        </footer>
                    </React.Fragment>
                }
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        cityName: state.weathers.cityName,
        cityDataFiveDays: state.weathers.cityDataFiveDays,
        weatherInfoFiveDays: state.weathers.weatherInfoFiveDays,
        loading: state.weathers.loading,
    }
}
function mapDispatchToProps(dispatch){
    return{
        fetchWeathersFiveDays: () => dispatch(fetchWeathersFiveDays())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherFiveDay);