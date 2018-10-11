import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArmyBuilder from './Component/ArmyBuilder.jsx'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ArmyBuilder/>
      </div>
    );
  }
}

export default App;
