import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Practice Coding',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Watch the Movie',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Read the Research',
        completed: false
      }
    ]
  };

  // Mark Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)]
    });
  };

  AddTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <div className="container">
                    <AddTodo AddTodo={this.AddTodo} />
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  </div>
                </React.Fragment>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
