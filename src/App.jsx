import React from "react";
import Layout from "./hoc/layout"
import WeatherToday from "./containers/WeatherToday"
import WeatherFiveDay from "./containers/WeatherFiveDay"
import {Route, Switch} from "react-router-dom"

function App(){
    return(
        <div>
            <Layout>
                <Switch>
                    <Route path='/five-day' component={WeatherFiveDay}></Route>
                    <Route path='/' component={WeatherToday}/>
                </Switch>
            </Layout>
        </div>

    )
}

export default App;