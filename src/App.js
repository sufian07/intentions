import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Login} />
      </Router>
    );
  }
}

export default App;
