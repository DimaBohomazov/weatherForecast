import React from 'react';
import Form from './UI/Form'
import {connect} from "react-redux"
import Loader from "../components/UI/Loader"
import {fetchWeathers} from "../store/actions/weathers"

class ErrorBoundary extends React.Component {
    bodyClassRemove = () =>{
        const body = document.querySelector('body')
        const className = body.classList.item(0)
        return body.classList.remove(className)
    }
    render() {
        if(this.props.error){
            this.bodyClassRemove()
            return (
                <div className='container'>
                    <Loader />
                    <div className="error">
                        Please enter the name of the city located in Ukraine.
                    </div>
                    <Form
                        id={'error'}
                    />
                </div>
            );
        } else{
            return this.props.children
        }
    }

}
function mapStateToProps(state) {
    return{
        error: state.weathers.error,
        cityName: state.weathers.cityName,
    }
}
function mapDispatchToProps(dispatch){
    return{
        fetchWeathers: () => dispatch(fetchWeathers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);