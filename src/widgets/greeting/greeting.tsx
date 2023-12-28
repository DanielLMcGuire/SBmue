import React from 'react';

import config from './greeting.config';

function Greeting() {
    
    return (
        <div>
            <h1>{config.birthday.message}</h1>
        </div>
    )
}

export default Greeting;
