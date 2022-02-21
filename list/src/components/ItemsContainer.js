import React, { Component } from 'react';

class ItemsContainer extends Component {
  render() {
    return (
      <div className='items-container'>
        <ul>
          {
            this.props.todoList.map(todoItem =>(
              <li key={todoItem.id}>
                {todoItem.item}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ItemsContainer;