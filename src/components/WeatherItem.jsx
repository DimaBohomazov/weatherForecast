import React from "react"


const WeatherItem = (props) => {
    const {
        weatherMain,
        weatherConditions,
        cityName,
        wind
        } = props
    return(

        <div className='weatherItem'>
            <div className='cityName'>
                <h1 className='display-1'>
                    {cityName}
                </h1>
                <div className='icon'>
                    <img src={`http://openweathermap.org/img/wn/${weatherConditions.icon}@2x.png`} alt="description"
                         title={weatherConditions.main}/>
                    <p>{weatherConditions.description}</p>
                </div>
            </div>
            <div className='infoToday'>
                <div>
                    <h3 className='display-1' >{Math.ceil(weatherMain.temp) + ' °C'}</h3>
                    <div>
                        <p>feels like <strong>{Math.ceil(weatherMain.feels_like) + ' °C'}</strong></p>
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
                        Wind {wind.speed + '  km/h'}
                    </div>
                    <div>
                        Pressure {weatherMain.pressure + ' hPa'}
                    </div>
                    <div>
                        Humidity {weatherMain.humidity + ' %'}
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default WeatherItem