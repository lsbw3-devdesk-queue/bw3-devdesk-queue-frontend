import React, { Component } from "react";
import { addTicket } from '../Actions/DataFetching';
import { connect } from 'react-redux';
import Form from "./Form";
import TicketList from "./TicketList";
// import { userInfo } from '../Actions/LoginAndSignup';

class TicketApp extends Component {
    state = {
       newTicket: '' 
    }

    addTicketToList = event => {
        event.preventDefault();
        const newTicket = {status: this.state.status, title: this.state.title, description: this.state.description };
        this.setState({
          newticket: [...this.state.questionList, newTicket],
          ticket: ''
        });
    };

    render() {

        if(localStorage.token === false){
            this.props.history.push('/');
        }

        return (
            <>
                <Form addTicket={this.props.addTicket}/>
                <TicketList/>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggingIn: state.loggingIn
    }
}
  
export default connect(
    mapStateToProps,
    { addTicket }
)   (TicketApp);