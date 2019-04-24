import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup"
import PrivateRoute from "./Components/PrivateRoute";
import { NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { logOut, login } from './Actions/LoginAndSignup';
import { connect } from 'react-redux';
import TicketApp from "./Components/TicketApp";


class App extends Component {
  logOut = e => {
    e.preventDefault();
    this.props.logOut();
    this.props.history.push('/');
  };

  render() {
    let loggedInNav = (
      <Nav className='navigation'>
        <NavbarBrand>DevDesk Que</NavbarBrand>
        <Nav>
          <NavItem>
            <div onClick={this.logOut}>LOG OUT</div>
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
        <div className="App">
          {localStorage.token ? (
            <div className='navBar'>{loggedInNav}</div>
          ) : (
            <div className='navBar'>{loggedOutNav}</div>
          )}
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/questionlist" component={TicketApp}/>
        </div>
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
