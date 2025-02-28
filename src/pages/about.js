import React from 'react';

import NavBar from '../components/NavBar';
import Title from '../components/Title';


function About() {
    return (
        <>
        <NavBar/>
        <Title>About Road To Code</Title>
        <p>
            Road to code is a resource made for beginner Python programmers, providing explanations, visualizations and examples of 
            concepts that are introduced when learning Python.
        </p>
        </>
    );
}

export default About;