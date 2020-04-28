import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with girlfriend',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      },
    ]
  };

markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      // Will set the completed state to the opposite of what it currently is. Toggles completed status.
      todo.completed = !todo.completed
    }
    return todo;
  }) })
}

render() {
  return (
    <div className="App">
      <Todos todos={this.state.todos}  markComplete={this.markComplete}/>
    </div>
  );
}
}

export default App;
