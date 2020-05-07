import React from "react"
import Loader from "../components/UI/Loader"
import {connect} from "react-redux"
import {fetchWeathers} from "../store/actions/weathers"
import ErrorBoundary from "../components/ErrorBoundary"


class WeatherToday extends React.Component {
    componentDidMount() {
        console.log('didMount')
        this.props.fetchWeathers()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cityName !== this.props.cityName) {
            this.props.fetchWeathers()
        }
    }

    render() {
        return (
            <ErrorBoundary>
                {this.props.loading && this.props.length !== 0
                    ? <Loader/>
                    : <div className='current'>
                        <div className='current-header'>
                            <div className='city-name'>
                                {this.props.cityName}
                            </div>

                            <div className='current-header__info'>
                                <img
                                    className='current-header__icon'
                                    src={`http://openweathermap.org/img/wn/${this.props.weatherConditions.icon}@2x.png`}
                                    alt={this.props.weatherConditions.description}
                                    title={this.props.weatherConditions.main}/>
                                <div className='current-header__icon-description'>{this.props.weatherConditions.description}</div>
                            </div>
                        </div>

                        <div className='current-info'>
                            <div className='current-info-main'>
                                <div className='current-info-main__temp'>
                                    {Math.round(this.props.weatherMain.temp) + ' °C'}
                                </div>
                                <div className='current-info-main__feel-temp'>
                                    Feels like: <strong>{Math.round(this.props.weatherMain.feels_like) + ' °C'}</strong>
                                </div>
                            </div>
                            <ul className='current-conditions'>
                                <li className='current-conditions__items'>
                                    Wind: {Math.round(this.props.wind.speed) + '  m/s'}
                                </li>
                                <li className='current-conditions__items'>
                                    Pressure: {this.props.weatherMain.pressure + ' hPa'}
                                </li>
                                <li className='current-conditions__items'>
                                    Humidity: {this.props.weatherMain.humidity + ' %'}
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            </ErrorBoundary>

        )
    }
}

function mapStateToProps(state){
    return{
        weatherMain: state.weathers.weatherMain,
        weatherConditions: state.weathers.weatherConditions,
        wind: state.weathers.wind,
        systemData: state.weathers.systemData,
        cityName: state.weathers.cityName,
        loading: state.weathers.loading,
    }
}
function mapDispatchToProps(dispatch){
    return{
        fetchWeathers: () => dispatch(fetchWeathers()),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(WeatherToday)