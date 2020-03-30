import React from "react"
import DateTime from "../components/UI/DateTime"
import Loader from "../components/UI/Loader"
import {connect} from "react-redux"
import {fetchWeathers} from "../store/actions/weathers"


class WeatherToday extends React.Component {
    componentDidMount() {
        console.log('didMount')
        this.props.fetchWeathers()
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.cityName !== this.props.cityName){
            this.props.fetchWeathers()
        }
        this.backgroundForBody()
        console.log('update')
    }
    backgroundForBody = () => {
        const body = document.querySelector('body')
        const now = new Date();
        const sunrise = new Date(this.props.systemData.sunrise * 1000);
        const sunset = new Date(this.props.systemData.sunset * 1000);
        if(now.getHours() > sunrise.getHours() + 1 && now.getHours() < 11 ){
            body.classList.add('morning')
        } else if(now.getHours() >= 11 && now.getHours() <= sunset.getHours()-1){
            body.classList.add('afternoon')
        } else if(now.getHours() >= sunset.getHours() && now.getHours() <= sunset.getHours() + 1 ){
            body.classList.add('evening')
        } else if(now.getHours() >= sunrise.getHours() && now.getHours() <= sunrise.getHours() + 1 ) {
            body.classList.add('sunrise')
        } else {
            body.classList.add('night')
        }

    }

    render() {
        return (
            <div className='container'>
                <div className='weatherItem'>
                    <div className='cityName'>
                        <h1 className='display-1'>
                            {this.props.cityName}
                        </h1>
                        
                        {this.props.loading && this.props.length !== 0
                            ? <Loader/>
                            : <div className='icon'>
                                <img src={`http://openweathermap.org/img/wn/${this.props.weatherConditions.icon}@2x.png`}
                                     alt={this.props.weatherConditions.description}
                                     title={this.props.weatherConditions.main}/>
                                <p>{this.props.weatherConditions.description}</p>
                            </div>
                        }

                    </div>

                    {this.props.loading && this.props.length !== 0
                        ? <Loader />
                        : <React.Fragment>
                            <div className='infoToday'>
                                <div>
                                    <h3 className='display-1'>{Math.ceil(this.props.weatherMain.temp) + ' °C'}</h3>
                                    <div>
                                        <p>Feels like <strong>{Math.ceil(this.props.weatherMain.feels_like) + ' °C'}</strong></p>
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
                            <footer>
                                <DateTime
                                    data = {this.props.systemData}
                                />
                            </footer>
                        </React.Fragment>
                    }
                </div>
            </div>

        )
    }
}
function mapStateToProps(state){
    console.log(state.weathers.cityName)
    return{
        weatherMain: state.weathers.weatherMain,
        weatherConditions: state.weathers.weatherConditions,
        wind: state.weathers.wind,
        systemData: state.weathers.systemData,
        cityName: state.weathers.cityName,
        loading: state.weathers.loading

    }
}
function mapDispatchToProps(dispatch){
    return{
        fetchWeathers: () => dispatch(fetchWeathers())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(WeatherToday)