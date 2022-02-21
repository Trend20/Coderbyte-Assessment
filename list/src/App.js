import React, { Component } from 'react';
import ItemsContainer from './components/ItemsContainer';

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      todoList: [],
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

    const newTodo = {
      item: this.state.item,
      id: Date.now()
    }

    this.setState(state =>({
      todoList: state.todoList.concat(newTodo),
      item: ''
    }))
  }

  render(){
    return (
     <div className='todo'>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" value={this.state.item} onChange={this.handleInput} placeholder='enter text here!'/>
          <button type='submit' onClick={this.onFormSubmit}>Add</button>
        </form>
        <ItemsContainer todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;