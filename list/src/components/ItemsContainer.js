import React, { Component } from 'react';

class ItemsContainer extends Component {
  constructor(props){
    super(props)
    this.state ={
      value: ''
    }
  }

  
  render() {
    return (
      <div className='items-container'>
        <ul>
          <li>{this.state.value}</li>
        </ul>
      </div>
    );
  }
}

export default ItemsContainer;