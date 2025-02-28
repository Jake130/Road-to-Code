import React from 'react';
import '../css/Bubble.css';

function Bubble(props) {
    
    const className = props.className!==undefined ? props.className : 'title-bubble';
    const width = props.width!==undefined ? props.width : props.className==='text-bubble' ? '280px' : props.className==='title-bubble' ? '500px' : '300px';
    return (
    <div className={className} style={{width: width}}>
        {props.children}
    </div>);
}

export default Bubble;