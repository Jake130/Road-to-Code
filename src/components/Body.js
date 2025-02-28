import React from 'react';
import '../css/body.css';

function Body(props) {
    return (<div className="body">
        {props.children}
    </div>);
}

export default Body;