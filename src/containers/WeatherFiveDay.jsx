import React from 'react';
import {openWeatherApiKey} from "../utils/api"

class WeatherFiveDay extends React.Component {
    state = {
        cityName: 'Kharkov'
    };

    componentDidMount() {
        console.log('didMount')
        this.getWeather()
    }

    getWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${
                this.state.cityName
            },
        ua&units=metric&mode=json&appid=${openWeatherApiKey}`
        )
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
            })
    }




    render() {
        return (
            <div>
                <h1 className='display-1'> {this.state.cityName} Five days</h1>
            </div>
        );
    }
}

export default WeatherFiveDay;