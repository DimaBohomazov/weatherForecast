import React from 'react';
import {openWeatherApiKey} from "../utils/api"
import DateTime from "../components/UI/DateTime"
import WeathersFiveDayItems from "../components/WeathersFiveDayItems/WeathersFiveDayItems"

class WeatherFiveDay extends React.Component {
    state = {
        cityName: 'Kharkov',
        cityData: [],
        weatherInfo: [],

    };


    componentDidMount() {
        console.log('didMount')
        this.getWeather();
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
                this.setState({
                    cityData: data.city,
                    weatherInfo: data.list
                })
                console.log('list', this.state.weatherInfo)
            })
    }
    daysFilter = props =>
        this.state.weatherInfo.filter(item => new Date().getDate() + props === new Date(item.dt * 1000).getDate());
    
    dayDate = () => {
        let dayDate = []
        for (let i = 0; i < 5; i++) {
            if(this.daysFilter(i)[0]) {
                dayDate.push(this.daysFilter(i)[0])
            }
        }
        return dayDate
    }







    render() {
        console.log('aaa', this.dayDate())
        // console.log('weather', this.daysFilter(0))
        // console.log('weather', this.daysFilter(1))
        //console.log('this',  (new Date().getDate() + 1) + " === " + (new Date(this.state.weatherInfo[1].td * 1000).getDate()))
        return (
            <div className='container'>
                <header>
                    <h1 className='display-1'> {this.state.cityName} Five days</h1>
                </header>
                <div>
                    <WeathersFiveDayItems 
                        weatherInfo={this.state.weatherInfo}
                        daysFilter={this.daysFilter}
                        dayDate={this.dayDate()}

                    />
                    {/*<div>
                        {this.daysFilter(0).map(listItem => {
                            return(
                                <WeathersFiveDayItems
                                    listItem={listItem}
                                />
                            )
                        })}
                    </div>
                    <div>
                        {this.daysFilter(1).map(listItem => {
                            return(
                                <WeathersFiveDayItems
                                    listItem={listItem}
                                />
                            )
                        })}
                    </div>
                    <div>
                        {this.daysFilter(2).map(listItem => {
                            return(
                                <WeathersFiveDayItems
                                    listItem={listItem}
                                />
                            )
                        })}
                    </div>
                    <div>
                        {this.daysFilter(3).map(listItem => {
                            return(
                                <WeathersFiveDayItems
                                    listItem={listItem}
                                />
                            )
                        })}
                    </div>
                    <div>
                        {this.daysFilter(4).map(listItem => {
                            return(
                                <WeathersFiveDayItems
                                    listItem={listItem}
                                />
                            )
                        })}
                    </div>*/}
                </div>
                    
                    
                  
                <footer>
                    <DateTime
                        data = {this.state.cityData}
                    />
                </footer>

            </div>


        );
    }
}

export default WeatherFiveDay;