import React, {Fragment} from "react";
import Form from '../UI/Form'
import logo from '../../images/logo.svg'
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import {setCityName} from "../../store/actions/weathers"


const NavBar = props => {
    return (
        <div className="container">
            <div className="navbar">
                <div
                    className="navbar__brand"
                    onClick={() => props.setCityName("Kharkov")}
                >
                    <img className='navbar__logo' src={logo} alt="logo" />
                    <div className='navbar__name'>
                        <span className='navbar__name--small'>wiu</span>
                        <span className='navbar__name--large'>weather in ukraine</span>

                    </div>
                </div>

                {
                    props.error
                    ? null
                    : (
                        <Fragment>
                            <ul className='navbar-list'>
                                <li className="navbar-list__item">
                                    <NavLink className="navbar-list__link" to={'/weatherForecast'} exact> Current </NavLink>
                                </li>
                                <li className="navbar-list__item">
                                    <NavLink className="navbar-list__link" to={'/weatherForecast/five-day'} exact>For 5 days</NavLink>
                                </li>
                            </ul>
                            <div className='form--navbar'>
                                <Form
                                    id={'navbar'}
                                />
                            </div>
                        </Fragment>

                    )
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return{
        cityName: state.weathers.cityName,
        error: state.weathers.error
    }
}
function mapDispatchToProps(dispatch){
    return{
        setCityName: (cityName) => dispatch(setCityName(cityName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)