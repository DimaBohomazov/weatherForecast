import React, {Component, Fragment} from 'react';
import NavBar from "../components/Navigation/NavBar"
import DateTime from "../components/UI/DateTime"

class Layout extends Component {

    render() {
        return (
            <Fragment>

                <header className='header'>
                    <NavBar />
                </header>

                <main className='container'>
                    <DateTime>
                        { this.props.children }
                    </DateTime>
                </main>

            </Fragment>
        );
    }
}

export default Layout