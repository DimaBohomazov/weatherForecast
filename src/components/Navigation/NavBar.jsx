import React from "react";
import {NavLink} from "react-router-dom"

const NavBar = props => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light ">
            <h4 className='display-4'>Weather in Ukraine</h4>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to={'/'} exact className="nav-link"> Today </NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Yesterday</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/five-day'} exact className="nav-link">For 5 days</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0 navbar">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">SELECT</button>
                    <input className="form-control mr-sm-2" type="text" placeholder="YOUR CITY" aria-label="YOUR CITY" />
                </form>
            </div>
        </nav>
    )
}

export default NavBar