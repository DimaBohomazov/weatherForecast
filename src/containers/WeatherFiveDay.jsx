import React from 'react';
import Loader from "../components/UI/Loader"
import WeathersFiveDayItems from "../components/WeathersFiveDayItems/WeathersFiveDayItems"
import ErrorBoundary from "../components/ErrorBoundary"
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
            <ErrorBoundary>
                <div className='container-'>
                    <header style={{textAlign: 'center'}}>
                        <h1 className='display-4' > {this.props.cityName} </h1>
                        <p>Hourly weather and forecasts in your city.</p>
                    </header>
                    {this.props.loading
                        ? <Loader />
                        : <div>
                            <WeathersFiveDayItems
                                weatherInfo={this.props.weatherInfoFiveDays}
                                daysFilter={this.daysFilter}
                                dayDate={this.dayDate()}
                            />
                        </div>
                    }
                </div>
            </ErrorBoundary>

        );
    }
}
function mapStateToProps(state) {
    return{
        cityName: state.weathers.cityName,
        weatherInfoFiveDays: state.weathers.weatherInfoFiveDays,
        loading: state.weathers.loading,
    }
}
function mapDispatchToProps(dispatch){
    return{
        fetchWeathersFiveDays: () => dispatch(fetchWeathersFiveDays()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherFiveDay);