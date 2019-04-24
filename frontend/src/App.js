import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup"
import PrivateRoute from "./Components/PrivateRoute";
import { NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { logOut } from './Actions/LoginAndSignup';
import { connect } from 'react-redux';
import TicketApp from "./Components/TicketApp";


class App extends Component {
  logOut = e => {
    e.preventDefault();
    this.props.logOut();
  };

  render() {

    let loggedInNav = (
      <Nav className='navigation'>
        <NavbarBrand>DevDesk Que</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href='/' onClick={this.logOut}>LOG OUT</NavLink>
          </NavItem>
        </Nav>
      </Nav>
    );

    let loggedOutNav = (
      <Nav>
        <NavbarBrand>DevDesk</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href='/login'>LOG IN</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/signup'>SIGN UP</NavLink>
          </NavItem>
        </Nav>
      </Nav>
    );

    return (
      <Router>
        <div className="App">
          {this.props.token ? (
            <div className='navBar'>{loggedInNav}</div>
          ) : (
            <div className='navBar'>{loggedOutNav}</div>
          )}
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/questionlist" component={TicketApp}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  token: state.token
});

export default connect(
  mapStateToProps,
  { logOut }
)(App);
