import React, { Component } from 'react';
import ItemsContainer from './ItemsContainer'

class ListItems extends Component {
  constructor(props){
    super(props);

    this.state ={
      todo: [],
      item: ''
    }
  }

  handleInput = (event) =>{
    this.setState({
      item: event.target.value
    })
    // console.log(event.target.value);
  }

  onFormSubmit = (event) =>{
    event.preventDefault();
    this.setState({
      todo: ''
    });
  }

  render() {
    return (
      <div className='todo'>
        <form>
          <input type="text" value={this.state.item} onChange={this.handleInput} placeholder='enter text here!'/>
          <button type='submit' onClick={this.onFormSubmit}>Add</button>
        </form>

        <ItemsContainer />
      </div>
    );
  }
}

export default ListItems;