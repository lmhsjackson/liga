import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var HelloWorld = 'Welcome to the Road to learn React!';
    var User = {name: 'Jose', age: 32};
    return (
      <div className="App">
      <h2>{HelloWorld}</h2>
      <h1>{User.name} {User.age}</h1>
      </div>
    );
  }
}

export default App;
