import React from 'react';

const Loader = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <div className='lds-ripple'>
                <div />
                <div />
            </div>

        </div>
    );
}

export default Loader;