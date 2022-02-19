import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      count: ''
    }
  }

  countValue = 0;

  increaseCount = () =>{
    this.countValue += 1;
    this.setState({
      count: this.countValue
    })
  }

  reduceCount = () =>{
    this.countValue -= 1;
    this.setState({
      count: this.countValue
    })
  }

  clearCount = () =>{
    this.setState({
      count: ''
    })
  }

  render() {
    return (
      <div className='app'>
        <p>{this.state.count}</p>
        <div className="events">
        <button onClick={this.reduceCount}>-</button>
        <button onClick={this.increaseCount}>+</button>
        <button onClick={this.clearCount}>Clear</button>
        </div>
      </div>
    );
  }
}

export default App;