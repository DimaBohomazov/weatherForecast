import React, {Component} from 'react';
import NavBar from "../components/Navigation/NavBar"
import DateTime from "../components/UI/DateTime"

class Layout extends Component {

    render() {
        return (
            <div>
                <header>
                    <NavBar />
                </header>

                <main>
                    { this.props.children }
                </main>

                <footer>
                    <DateTime/>
                </footer>
            </div>
        );
    }
}

export default Layout