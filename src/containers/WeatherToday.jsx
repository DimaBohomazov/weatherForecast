import React from "react"
import Loader from "../components/UI/Loader"
import ErrorBoundary from "../components/ErrorBoundary"
import {connect} from "react-redux"
import {fetchWeathers} from "../store/actions/weathers"

class WeatherToday extends React.Component {
    componentDidMount() {
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
                <div className='container'>
                    <div className='weatherItem'>
                        <div className='cityName'>
                            <h1 className='display-1'>
                                {this.props.cityName}
                            </h1>

                            {this.props.loading && this.props.length !== 0
                                ? <Loader/>
                                : <div className='icon'>
                                    <img
                                        src={`http://openweathermap.org/img/wn/${this.props.weatherConditions.icon}@2x.png`}
                                        alt={this.props.weatherConditions.description}
                                        title={this.props.weatherConditions.main}/>
                                    <p>{this.props.weatherConditions.description}</p>
                                </div>
                            }

                        </div>

                        {this.props.loading && this.props.length !== 0
                            ? <Loader/>
                            : <div className='infoToday'>
                                <div>
                                    <h3 className='display-1'>{Math.ceil(this.props.weatherMain.temp) + ' °C'}</h3>
                                    <div>
                                        <p>Feels
                                            like <strong>{Math.ceil(this.props.weatherMain.feels_like) + ' °C'}</strong>
                                        </p>
                                    </div>
                                </div>
                                <div className='tempInfo'>
                                    {/*<div>
                Temp min {Math.ceil(weatherMain.temp_min) + ' °C'}
            </div>
            <div>
                Temp max {Math.ceil(weatherMain.temp_max) + ' °C'}
            </div>*/}
                                    <div>
                                        Wind {Math.ceil(this.props.wind.speed) + '  m/s'}
                                    </div>
                                    <div>
                                        Pressure {this.props.weatherMain.pressure + ' hPa'}
                                    </div>
                                    <div>
                                        Humidity {this.props.weatherMain.humidity + ' %'}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
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