import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//Import Components
import Body from './components/Body.js';


//Router
import { BrowserRouter,Routes,Route } from 'react-router-dom';

//Pages
import Concepts from './pages/concepts.js';
import About from './pages/about.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
// put <App /> back in to see default React stuff
root.render(
  <React.StrictMode>
    <Body>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Concepts/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <div className="footer">
        <p>Road to Code is an independent project made by Jacob Kolster, and powered by React.<br></br></p>
      </div>
    </Body>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
