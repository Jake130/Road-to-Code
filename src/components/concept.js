import React from 'react';
import '../css/concept.css';


function Concept(props) {
    return (
        <div className="concept">
            <img className="concept-img" alt="Concept" src={props.src} />
            <div className="concept-title">
                <span className='concept-text'>{props.text}</span>
            </div>
        </div>
    );
}

export default Concept;