import React, { Component } from 'react';
import VeryEasy from './challenges/veryeasy.js';
import './App.css';
import Medium from './challenges/medium';
import Easy from './challenges/easy.js';
import Hard from './challenges/hard';


class App extends Component {
  render () {
    return (
      <div className="App">
        <VeryEasy />
        <Easy />
        <Medium />
        <Hard />
      </div>
    );
  }
}



export default App;
