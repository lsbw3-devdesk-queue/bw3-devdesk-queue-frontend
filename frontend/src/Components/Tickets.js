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

  toggleEdit = () => {
    this.setState( originalState => ({
        edit: !originalState.edit
    }))
  }

  deleteTicket = id => {
    this.props.deleteTicket(this.props.ticket.id);
  }
  render() {
    console.log(this.props.ticket.id);
    return (
      <div>
        <Card >
          <CardBody>
            <h3>{this.props.ticket.categories}</h3>
            <h3>{this.props.ticket.title}</h3>
            <h3>{this.props.ticket.description}</h3>
            <p>{this.props.ticket.status}</p>
          </CardBody>
          {this.state.edit && <AnswerForm ticket={this.props.id} submit={ () => this.props.answerTicket()}/>}
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
    edit: state.editing
  }
}

export default connect(
  mapStateToProps,
  { answerTicket, deleteTicket }
)(Ticket);