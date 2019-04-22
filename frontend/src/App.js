import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import {NavBar} from 'reactstrap';
import Login from './Components/Login';
import Signup from './Components/Signup.js';
import QuestionList from './Components/QuestionList';
import PrivateRoute from './Components/PrivateRoute';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
          <Link to="/">Log In</Link>
          <br />
          <Link to="/signup">Sign Up</Link>
          </div>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/protected" component={QuestionList}/>
        </div>
      </Router>
    );
  }
}

export default App;
