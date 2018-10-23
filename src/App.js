import React, { Component } from 'react';
import './App.css';
import Formulaires from './Formulaires';
import Fetchdata from './Fetchdata';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Formulaires/>
        <Fetchdata/>
      </div>
    );
  }
}

export default App;
