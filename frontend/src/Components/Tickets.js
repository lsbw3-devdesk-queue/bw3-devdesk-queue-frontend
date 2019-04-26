import React from "react";
import {
  Card,
  CardBody
} from "reactstrap";
import { connect } from "react-redux";
import { answerTicket, deleteTicket } from '../Actions/DataFetching';
import AnswerForm from './AnswerForm';

class Ticket extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false
    }
  }

  submitTicket = ( newTicket ) => {
    this.props.answerTicket( newTicket, this.props.userData.role,  this.props.ticket.id);
    // this.toggleEdit();
  }

  toggleEdit = () => {
    this.setState( originalState => ({
      edit: !originalState.edit
    }));
  }

  deleteTicket = id => {
    this.props.deleteTicket(this.props.ticket.id);
  }
  render() {
    console.log(this.props.userData, 'userData');
    return (
      <div>
        <Card >
          <CardBody className='ticket'>
            <h3>Topic: {this.props.ticket.categories}</h3>
            <h3>{this.props.ticket.title}</h3>
            <h3>{this.props.ticket.description}</h3>
            <p>Status: {this.props.ticket.status}</p>
          </CardBody>
          {this.state.edit && <AnswerForm ticket={ this.props.ticket } submit={ newTicket => this.submitTicket( newTicket )}/>}
          <button 
            className='edit' 
            onClick={this.toggleEdit}
          >Answer Question</button>
          <button onClick={this.deleteTicket}>Delete</button>
        </Card>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    // edit: state.editing,
    // role: state.user.role,
    userData: state.user

  }
}

export default connect(
  mapStateToProps,
  { answerTicket, deleteTicket }
)(Ticket);