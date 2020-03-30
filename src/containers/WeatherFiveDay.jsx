import React from 'react';
import {openWeatherApiKey} from "../utils/api"
import DateTime from "../components/UI/DateTime"
import Loader from "../components/UI/Loader"
import axios from "axios"
import WeathersFiveDayItems from "../components/WeathersFiveDayItems/WeathersFiveDayItems"

class WeatherFiveDay extends React.Component {
    state = {
        cityName: 'Kharkov',
        cityData: [],
        weatherInfo: [],
        loading: true
    };


    componentDidMount() {
        console.log('didMount');
        this.getWeather();
    }

    getWeather = async () => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${
                this.state.cityName
            },ua&units=metric&mode=json&appid=${openWeatherApiKey}`);
            this.setState({
                cityData: response.data.city,
                weatherInfo: response.data.list,
                loading: false
            })
        } catch(e) {
            console.log(e)
        }

        /*fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${
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
                    cityData: data.city,
                    weatherInfo: data.list
                });
                console.log('list', this.state.weatherInfo)
            })*/
    };
    daysFilter = props => {
        let time = Date.parse(Date()) + 3*3600000 + (86400000 * props);
        return this.state.weatherInfo.filter(item =>
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
        console.log('0-1', this.daysFilter(0));
        console.log('1-2', this.daysFilter(1));
        console.log('2-3', this.daysFilter(2));
        console.log('3-4', this.daysFilter(3));
        console.log('4-5', this.daysFilter(4));
        console.log('5-', this.daysFilter(5));


        // console.log('weather', this.daysFilter(0))
        // console.log('weather', this.daysFilter(1))
        //console.log('this',  (new Date().getDate() + 1) + " === " + (new Date(this.state.weatherInfo[1].td * 1000).getDate()))
        return (
            <div className='container-'>
                <header>
                    <h1 className='display-4' style={{textAlign: 'center'}}> {this.state.cityName} next time</h1>
                </header>
                {this.state.loading
                   ? <Loader />
                   :<React.Fragment>
                        <div>
                            <WeathersFiveDayItems
                                weatherInfo={this.state.weatherInfo}
                                daysFilter={this.daysFilter}
                                dayDate={this.dayDate()}
                            />
                        </div>
                        <footer className='m-5'>
                            <DateTime
                                data = {this.state.cityData}
                            />
                        </footer>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default WeatherFiveDay;