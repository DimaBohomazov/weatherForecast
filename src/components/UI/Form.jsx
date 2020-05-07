import React from 'react';
import search from '../../images/search.png'
import {connect} from "react-redux"
import {setCityName} from "../../store/actions/weathers"

const Form = (props) => {
    const cityNameHandler = (event) => {
        event.preventDefault()
        let fetchValue = document.getElementById(`${props.id}-input`).value;
        console.log(fetchValue)
        let cityName = fetchValue.charAt(0).toUpperCase() + fetchValue.slice(1)
        return cityName
    }

    return (
        <form className="form">
            <input
                className="form__input"
                type="text"
                id={`${props.id}-input`}
                placeholder='Change city'

            />
            <button className="form-btn"
                    type="submit"
                    onClick={(event) => props.setCityName(cityNameHandler(event))}
            >
                <span className='form-btn__text'>select</span>
                <img className='form-btn__icon' src={search} alt="select"/>
            </button>

        </form>
    );
}
function mapDispatchToProps(dispatch){
    return{
        setCityName: (cityName) => dispatch(setCityName(cityName))
    }
}

export default connect(null, mapDispatchToProps)(Form)