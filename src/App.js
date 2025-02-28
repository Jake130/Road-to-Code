import logo from './logo.svg';
import recursion from './imgs/recursion.png';
import './App.css';
import Concept from './components/concept.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my React App!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Concept text="Variables" src={recursion}/>
      </header>
    </div>
  );
}

export default App;
