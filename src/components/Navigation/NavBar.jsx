import React from "react";
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import {setCityName} from "../../store/actions/weathers"
const NavBar = props => {
    const cityNameHandler = (event) => {
        event.preventDefault()
            let fetchValue = document.getElementById('city-input').value;
            let cityName = fetchValue.charAt(0).toUpperCase() + fetchValue.slice(1)
            return cityName
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <h4 className='display-4' style={{cursor: 'default'}}>Weather in Ukraine</h4>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to={'/weatherForecast'} exact className="navLink"> now </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/weatherForecast/five-day'} exact className="navLink">For 5 days</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-1">
                    <button className="btn btn-outline-light my-2 my-sm-0 mr-1"
                            type="submit"
                            onClick={(event) => props.setCityName(cityNameHandler(event))}
                    >
                        SELECT
                    </button>
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        id="city-input"
                        placeholder={props.cityName}

                    />
                </form>
            </div>
        </nav>
    )
}

function mapStateToProps(state) {
    return{
        cityName: state.weathers.cityName
    }
}
function mapDispatchToProps(dispatch){
    return{
        setCityName: (cityName) => dispatch(setCityName(cityName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)