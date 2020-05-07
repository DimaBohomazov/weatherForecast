import React, {Fragment} from "react";
import {connect} from "react-redux"
import Form from '../UI/Form'


class DateTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
        }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    getDateString = () => {
        let date = this.state.date
        return (
            <Fragment>
                <span className='time__current-week'>{date.toLocaleString('en-Ua', {weekday: 'long'})}</span>
                <span className='time__current-date'>{date.toLocaleString()}</span>
            </Fragment>
        )
    }
    getSunTime = props => {
        let a = new Date(props)
        let options = {hour: 'numeric', minute: 'numeric'}
        return a.toLocaleString('ua', options)
    };
    getDayLength = (sunrise, sunset) => {
        let a = new Date(sunset * 1000) - new Date(sunrise * 1000) - 3 * 3600000
        let options = {hour: 'numeric', minute: 'numeric'}
        return new Date(a).toLocaleString('ua', options)
    };

    render() {

        return (
            <Fragment>
                <div className='time__current'>
                    {this.getDateString()}
                </div>
                {this.props.children}
                {
                this.props.error
                    ?null
                    :<Fragment>
                        <ul className='time-list'>
                            <li className='time-list__item'>
                                Sunrise {this.getSunTime(this.props.data.sunrise * 1000)}
                            </li>
                            <li className='time-list__item'>
                                Sunset {this.getSunTime(this.props.data.sunset * 1000)}
                            </li>
                            <li className='time-list__item'>
                                Day length {this.getDayLength(this.props.data.sunrise, this.props.data.sunset)}
                            </li>
                        </ul>
                        <footer className='footer'>
                            <Form
                                id={'footer'}
                            />
                        </footer>
                    </Fragment>
                }
            </Fragment>
        )
    }
}
function mapStateToProps(state){
    return{
        data: state.weathers.systemData,
        error: state.weathers.error
    }
}
export default connect(mapStateToProps)(DateTime)