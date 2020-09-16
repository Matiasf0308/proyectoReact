import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Icon from './components/carticon';
import Form from './components/contador';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path = '/'>
      
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
        <Form/>
      </header>
      </Route>
      </Switch>
    </div>
    </BrowserRouter>
  
    
     
  
  );
}

export default App;
