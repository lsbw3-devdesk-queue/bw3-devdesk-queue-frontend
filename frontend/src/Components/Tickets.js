import React from "react";
import {
  Card,
  CardBody
} from "reactstrap";
import { connect } from "react-redux";
import { answerTicket } from '../Actions/DataFetching';
import Form from './Form';

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
  render() {
    return (
      <div>
        <Card >
          <CardBody>
            <h3>{this.props.ticket.status}</h3>
            <h3>{this.props.ticket.title}</h3>
            <h3>{this.props.ticket.description}</h3>
          </CardBody>
          {this.state.edit && <Form question={this.props.question} submit={this.props.answerTicket}/>}
          <button 
            className='edit' 
            onClick={this.toggleEdit}
          >Answer Question</button>
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
  { answerTicket }
)(Ticket);