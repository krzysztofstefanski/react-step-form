import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-one">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      <p>paragraph</p>
          <p >
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>paragraph</p>
      <p>paragraph</p>
      <p>first paragraph pierwszy</p>trzeci
      <p>paragraph second drugi</p>
      <p>paragraph third </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Reactt
          </a>
        </header>
      </div>
    );
  }
}

export default App;
