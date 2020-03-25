import React from "react"
import {openWeatherApiKey} from "../utils/api"
import DateTime from "../components/UI/DateTime"


class WeatherToday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherMain: [],
            weatherConditions: [],
            wind: [],
            systemData: [],
            cityName: 'Kharkov',
        }
        console.log(this.state.weather)
    }

    componentDidMount() {
        console.log('didMount')
        this.getWeather()
    }
    

    getWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${
                this.state.cityName
            },
        ua&units=metric&mode=json&appid=${openWeatherApiKey}`
        )
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    weatherConditions: data.weather[0],
                    weatherMain: data.main,
                    wind: data.wind,
                    systemData: data.sys
                })
            })
    }

    render() {
        return (
            <div className='container'>
                <div className='weatherItem'>
                    <div className='cityName'>
                        <h1 className='display-1'>
                            {this.state.cityName}
                        </h1>
                        <div className='icon'>
                            <img src={`http://openweathermap.org/img/wn/${this.state.weatherConditions.icon}@2x.png`} alt="description"
                                 title={this.state.weatherConditions.main}/>
                            <p>{this.state.weatherConditions.description}</p>
                        </div>
                    </div>
                    <div className='infoToday'>
                        <div>
                            <h3 className='display-1'>{Math.ceil(this.state.weatherMain.temp) + ' °C'}</h3>
                            <div>
                                <p>feels like <strong>{Math.ceil(this.state.weatherMain.feels_like) + ' °C'}</strong></p>
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
                                Wind {this.state.wind.speed + '  km/h'}
                            </div>
                            <div>
                                Pressure {this.state.weatherMain.pressure + ' hPa'}
                            </div>
                            <div>
                                Humidity {this.state.weatherMain.humidity + ' %'}
                            </div>
                        </div>
                    </div>
                    <footer>
                        <DateTime
                            data = {this.state.systemData}
                        />
                    </footer>
                </div>
            </div>

        )
    }
}

export default WeatherToday