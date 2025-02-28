import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//Import Components
//import App from './App';
import Title from './components/Title.js';
import Body from './components/Body.js';
import Bubble from './components/Bubble.js';
import Concept from './components/concept.js';

//Import Images
import recursion from './imgs/recursion.png';

const concepts = [
  { name:'Data Types'},
  { name:'Variables'},
  { name:'Loops'},
  { name:'Functions'},
  { name:'Recursion', src:recursion},
];
const conceptList = concepts.map(concept => <Concept text={concept.name} src={concept.src}/>);
//console.log(conceptList);

const root = ReactDOM.createRoot(document.getElementById('root'));
// put <App /> back in to see default React stuff
root.render(
  <React.StrictMode>
      <Body>
        <div className='title-bubble'>
          <Title>Concepts Available!</Title>
        </div>
        {conceptList}
        <Concept text="Variables" src={recursion}/>
        <Bubble className='text-bubble'>Text</Bubble>
        <Bubble className='title-bubble'>Here</Bubble>
      </Body>
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
