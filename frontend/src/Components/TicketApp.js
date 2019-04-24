import React, { Component } from "react";
import { addTicket } from '../Actions/DataFetching';
import { connect } from 'react-redux';
import Form from "./Form";
import TicketList from "./TicketList";

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

    // deleteQuestion = id => {
    //     this.props.deleteQuestion(id);
    // }

    render() {
        return (
            
            <>

                <Form submit={this.props.addTicket}/>

                <TicketList/>

            </>
        );
    }
}
  
export default connect(
    null,
    { addTicket }
)(TicketApp);