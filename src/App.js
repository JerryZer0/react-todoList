import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './component/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to todoList</h1>
        </header>
        <hr />
        <div className="container">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
