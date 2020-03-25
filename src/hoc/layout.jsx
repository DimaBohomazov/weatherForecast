import React, {Component} from 'react';
import NavBar from "../components/Navigation/NavBar"

class Layout extends Component {
    // state = {
    //     cityName: 'Kharkov'
    // };
    
    render() {
        // const children = React.Children.map(this.props.children, (child) => {
        //     return React.cloneElement(child, {
        //         cityName: this.state.cityName
        //     });
        // });

        
        return (
            <div>
                <NavBar />
                
                <main>
                    { this.props.children }
                </main>
                
            </div>
        );
    }
}

export default Layout;