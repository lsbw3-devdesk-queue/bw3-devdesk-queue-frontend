import React, { Component } from "react";
import { signup } from "../Actions/LoginAndSignup";
import { connect } from "react-redux";

class Signup extends Component {
    state = {
        credentials: {
            email: "",
            username: "",
            password: ""
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    signup = e => {
        e.preventDefault();
        this.props.signup(this.state.credentials)
        .then(()=> this.props.history.push('/questionlist'))
    };

    render() {
        return (
            <div>
                <form onSubmit={this.signup}>
                    <input
                        name="email"
                        type="text"
                        placeholder="email"
                        value={this.state.credentials.email}
                        onChange={this.handleChanges}
                    />
                    <br />
                    <input
                        name="username"
                        type="text"
                        placeholder="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    />
                    <br />
                    <input
                        name="password"
                        type="text"
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    />
                    <br />
                    <button type="submit">SIGN UP</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    error: state.error,
    signingUp: state.signingUp
});

export default connect(
    mapStateToProps,
    { signup }
)(Signup);
