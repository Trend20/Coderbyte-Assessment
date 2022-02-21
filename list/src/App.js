import React, { Component } from 'react';
import ListItems from './components/ListItems';
import './App.css';

class App extends Component() {
  render(){
    return (
      <div className="app">
        
        <ListItems />
      </div>
    );
  }
}

export default App;
