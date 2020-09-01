import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Icon from './components/carticon';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code></code> Under construction
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
    
     
  );
}

export default App;
