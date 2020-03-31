import React from "react";
import Layout from "./hoc/layout"
import WeatherToday from "./containers/WeatherToday"
import WeatherFiveDay from "./containers/WeatherFiveDay"
import {Route, Switch, Redirect} from "react-router-dom"

function App(){
    return(
        <div>
            <Layout>
                <Switch>
                    <Route path='/five-day' exact component={WeatherFiveDay} />
                    <Route path='/' exact component={WeatherToday} />
                    <Redirect to={'/'} />
                </Switch>
            </Layout>
        </div>

    )
}

export default App;