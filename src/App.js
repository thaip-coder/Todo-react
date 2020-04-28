import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import {v4 as uuid} from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Dinner with girlfriend',
        completed: false
      },
      {
        id: uuid(),
        title: 'Meeting with boss',
        completed: false
      },
    ]
  };

// Method to toggle complete status
markComplete = (id) => {
  // Sets the state of completed status
  this.setState({ todos: this.state.todos.map(todo => {
    // Checks for id of a todo item that is clicked
    if(todo.id === id) {
      // Will set the completed state to the opposite of what it currently is. Toggles completed status.
      todo.completed = !todo.completed
    }
    // Updates status visibly
    return todo;
  }) });
};

// Remove todo item
remove = (id) => {
  // Use filter method (spread operater) to loop through and returns an array given a condition and return a new array
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
};

// Add Todo
addTodo = (title) => {
  const newTodo = {
    id: uuid(),
    title: title,
    completed: false,
  }
  this.setState({ todos: [...this.state.todos, newTodo]});
}

  // Render's the page
  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos}  markComplete={this.markComplete} remove={this.remove}/>
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  };
};

export default App;
