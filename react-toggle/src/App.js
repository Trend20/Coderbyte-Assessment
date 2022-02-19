import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      isButtonOn: false
    }
  }

  handleButtonClick = () =>{
    this.setState({
      isButtonOn: !this.state.isButtonOn
    })
  }

  render() {
    const { isButtonOn } = this.state;
    return (
      <div className='app'>
        <button onClick={this.handleButtonClick}>{ isButtonOn ? 'ON' : 'OFF'}</button>
      </div>
    );
  }
}

export default App;