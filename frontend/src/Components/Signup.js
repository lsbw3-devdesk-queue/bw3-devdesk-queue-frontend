import React, { Component } from "react";
import { signup } from "../Actions/LoginAndSignup";
import { connect } from "react-redux";

class Signup extends Component {
    state = {
        authorization: {
            email: '',
            username: '',
            password: '',
            role: ''
        }
    };

    handleChanges = e => {
        this.setState({
            authorization: {
                ...this.state.authorization,
                [e.target.name]: e.target.value
            }
        });
    };

    signup = e => {
        e.preventDefault();
        this.props.signup(this.state.authorization)
        alert('Registration Successful')
        this.props.history.push('/')
        // setTimeout(()=> this.props.history.push('/'), 3000 )

    };

    render() {
        return (
            <div>
                <form onSubmit={this.signup}>
                    <input
                        name="email"
                        type="text"
                        placeholder="email"
                        value={this.state.authorization.email}
                        onChange={this.handleChanges}
                    />
                    <br />
                    <input
                        name="username"
                        type="text"
                        placeholder="username"
                        value={this.state.authorization.username}
                        onChange={this.handleChanges}
                    />
                    <br />
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        value={this.state.authorization.password}
                        onChange={this.handleChanges}
                    />
                    <br />
                    <input
                        name="role"
                        type="text"
                        placeholder="Student or Helper"
                        value={this.state.authorization.role}
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
