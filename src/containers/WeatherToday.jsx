import React from "react"
import {openWeatherApiKey} from "../utils/api"
import DateTime from "../components/UI/DateTime"
import Loader from "../components/UI/Loader"
import axios from "axios"


class WeatherToday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherMain: [],
            weatherConditions: [],
            wind: [],
            systemData: [],
            cityName: 'Kharkov',
            loading: true
        }
    }

    componentDidMount() {
        console.log('didMount')
        this.getWeather()
    }
    componentDidUpdate(prevProps, prevState) {
        this.backgroundForBody()
    }

    getWeather = async () => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${
                this.state.cityName
            },ua&units=metric&mode=json&appid=${openWeatherApiKey}`)
            this.setState({
                weatherConditions: response.data.weather[0],
                weatherMain: response.data.main,
                wind: response.data.wind,
                systemData: response.data.sys,
                loading: false
            })
        } catch(e) {
            console.log(e)
        }

        /*fetch(`https://api.openweathermap.org/data/2.5/weather?q=${
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
            })*/
    }
    backgroundForBody = () => {
        const body = document.querySelector('body')
        const now = new Date();
        const sunrise = new Date(this.state.systemData.sunrise * 1000);
        const sunset = new Date(this.state.systemData.sunset * 1000);
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
                            {this.state.cityName}
                        </h1>
                        
                        {this.state.loading
                            ? <Loader/>
                            : <div className='icon'>
                                <img src={`http://openweathermap.org/img/wn/${this.state.weatherConditions.icon}@2x.png`} alt="description"
                                     title={this.state.weatherConditions.main}/>
                                <p>{this.state.weatherConditions.description}</p>
                            </div>
                        }

                    </div>

                    {this.state.loading
                        ? <Loader />
                        : <React.Fragment>
                            <div className='infoToday'>
                                <div>
                                    <h3 className='display-1'>{Math.ceil(this.state.weatherMain.temp) + ' °C'}</h3>
                                    <div>
                                        <p>Feels like <strong>{Math.ceil(this.state.weatherMain.feels_like) + ' °C'}</strong></p>
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
                                        Wind {Math.ceil(this.state.wind.speed) + '  m/s'}
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
                        </React.Fragment>
                    }
                </div>
            </div>

        )
    }
}

export default WeatherToday