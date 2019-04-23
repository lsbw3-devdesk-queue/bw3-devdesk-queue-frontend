import React, { Component } from 'react';
import './App.css';
import connect from 'react-redux/lib/connect/connect';
import Form from './Form';
import { addQuestion } from '../actions';
import QuestionList from './QuestionList';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className='addSmurf'>
          <Form submit={this.props.addQuestion}/>
        </div>
        <QuestionList/>
      </div>
    );
  }
}

export default connect(
  null,
  {addSmurf}
) (App);