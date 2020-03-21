import React from "react";
import {openWeatherApiKey} from "../utils/api"
import WeatherItem from "./WeatherItem"
import Header from "./Header"

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            weatherMain: [],
            weatherConditions: [],
            cityName: 'Kharkiv'
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
            .then((data)=> {
                console.log(data);
                this.setState({
                    weatherConditions: data.weather[0],
                    weatherMain: data.main
                })
            })
    }

    render() {
        return(
            <div>
                <Header />
                <WeatherItem
                    weatherConditions = {this.state.weatherConditions}
                    weatherMain = {this.state.weatherMain}
                    cityName = {this.state.cityName}
                />
            </div>
        )
    }
}

export default App;