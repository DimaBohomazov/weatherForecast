import React from "react";
import {openWeatherApiKey} from "../utils/api"
import WeatherItem from "./WeatherItem"
import Header from "./Header"
import DateTime from "./DateTime"

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            weatherMain: [],
            weatherConditions: [],
            wind: [],
            systemData: [],
            cityName: 'Kharkiv',
        }
        console.log(this.state.weather)
    }


    componentDidMount() {
        console.log('didMount')
        this.getWeather()
    }

   /* componentDidUpdate(prevProps, prevState) {
        if(prevState.date !== this.state.date){
            this.updateDate()
        }
    }*/

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
                    weatherMain: data.main,
                    wind: data.wind,
                    systemData: data.sys
                })
            })
    }
    /*updateDate = () => {
        const a = new Date()
        this.setState({
            date: a
        })
        console.log('date', this.state.date)
    }*/

    render() {
        return(
            <div>
                <Header />
                <WeatherItem
                    weatherConditions = {this.state.weatherConditions}
                    weatherMain = {this.state.weatherMain}
                    wind = {this.state.wind}
                    
                    cityName = {this.state.cityName}
                />
                <DateTime
                    systemData = {this.state.systemData}                
                />
            </div>

        )
    }
}

export default App;