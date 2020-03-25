import React from "react";


class DateTime extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
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
    getSunTime = props => {
        let a = new Date(props)
        let options = {hour: 'numeric', minute: 'numeric'}
        return a.toLocaleString('ua', options)
    };
    getDayLength = (sunrise, sunset) =>{
        let a = new Date((sunset - sunrise) * 1000)
        return a.getHours() + ':' + a.getMinutes()
    };

    render(){
        const {data} = this.props;
    
        return(
            <div className='dateTime'>
                <div>
                    { this.state.date.toLocaleString()}
                </div>
                <div>
                    Sunrise {this.getSunTime(data.sunrise * 1000)}
                </div>
                <div>
                    Sunset {this.getSunTime(data.sunset * 1000)}
                </div>
                <div>
                    Day length {this.getDayLength(data.sunrise, data.sunset)}
                </div>
    
            </div>
    )
}
}

export default DateTime