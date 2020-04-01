import React from 'react';
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import {setCityName} from "../store/actions/weathers"

class ErrorBoundary extends React.Component {
    cityNameHandler = (event) => {
        let fetchValue = document.getElementById('error-input').value;
        let cityName = fetchValue.charAt(0).toUpperCase() + fetchValue.slice(1)
        return cityName
    }
    bodyClassRemove = () =>{
        const body = document.querySelector('body')
        const className = body.classList.item(0)
        return body.classList.remove(className)
    }
    render() {
        if(this.props.error){
            this.bodyClassRemove()
            return (
                <div className='container error'>
                    <h1 className='display-1'>
                        Please enter the name of the city located in Ukraine.
                    </h1>
                    <form className="form-inline">
                        <input className="form-control form-control-lg"
                               type="text"
                               id="error-input"
                        />
                        <div>
                            <NavLink
                                to={'/'}
                                className="btn btn-outline-light"
                                role='button'
                                type="submit"
                                onClick={(event) => this.props.setCityName(this.cityNameHandler(event))}
                            >
                                Send
                            </NavLink>
                        </div>
                    </form>
                </div>
            );
        } else{
            return this.props.children
        }
    }

}
function mapStateToProps(state) {
    return{
        error: state.weathers.error
    }
}
function mapDispatchToProps(dispatch){
    return{
        setCityName: (cityName) => dispatch(setCityName(cityName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);