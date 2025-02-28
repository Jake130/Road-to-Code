import React from 'react';
//Images
import dataTypes from '../imgs/DataTypes.jpg';
import functions from '../imgs/Functions.png';
import loops from '../imgs/Loops.png';
import recursion from '../imgs/recursion.png';
//CSS
import '../css/concept.css';
//Components
import Title from '../components/Title';
import Concept from '../components/concept';
import Bubble from '../components/Bubble';
import NavBar from '../components/NavBar';

const concepts = [
    { name:'Data Types', src:dataTypes},
    { name:'Variables'},
    { name:'Loops', src:loops},
    { name:'Functions', src:functions},
    { name:'Recursion', src:recursion},
  ];
  const conceptList = concepts.map(concept => <Concept text={concept.name} src={concept.src}/>);
function Concepts() {
    return (
        <>
        <NavBar />
        <div className='title-bubble'>
          <Title>Concepts Available!</Title>
        </div>
        <div className='concept-list'>{conceptList}</div>
        <Bubble className='text-bubble'>Text</Bubble>
        <Bubble className='title-bubble'>Here</Bubble>
        </>
    );
}


export default Concepts;