import React, { Component } from "react";
import { addQuestion, deleteQuestion, answerQuestion } from '../Actions/LoginAndSignup';
import { connect } from 'react-redux';
import Form from "./Form";

class QuestionList extends Component {
    constructor() {
        super();
        this.state = {
            newQuestion: '',
            edit: false
        }
    }

    handleChanges = e => {
        this.setState({
            newQuestion: e.target.value
        })
    };

    addQuestionToList = e => {
        e.preventDefault();
        this.props.addQuestion(this.state.questions);
        this.setState({
            newQuestion: ''
        });
    }

    deleteQuestion = id => {
        this.props.deleteQuestion(id);
    }

    toggleEdit = () => {
        this.setState( originalState => ({
            edit: !originalState.edit
        }))
    }

    render() {
        return (
            <>

                <input 
                    name = 'topic'
                    type = 'text'
                    value = {this.state.questions}
                    placeholder = 'Topic'
                    onChange={this.handleChanges}
                />

                <input 
                    name = 'question'
                    type = 'text'
                    value = {this.state.questions}
                    placeholder = 'Question'
                    onChange={this.handleChanges}
                />

                <button onClick={this.addQuestionToList}>Ask Question</button>

                <div className='questionList'>
                    {this.props.questionList.map( question => (
                        <div className='question'>
                            <h4

                                className={`${question.answered ? "item-answered" : null}`}
                                key = {Date.now()}
                            >
                                <p>{question.topic}</p>
                                <p>{question.content}</p>
                            </h4>
                            {this.state.edit && <Form question={this.props.question} submit={this.props.answerQuestion}/>}
                            <button 
                                className='edit' 
                                onClick={this.toggleEdit}
                            >Answer Question</button>
                            <h4 onClick = { () => this.deleteQuestion(question.id)}>delete</h4>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    questionList: state.questions,
    edit: state.editing
});
  
export default connect(
    mapStateToProps,
    { addQuestion, deleteQuestion, answerQuestion }
)(QuestionList);




{/* <div className='questionList'>
{this.props.questionList.map( question => (
    <div className='question'>
        <h4

            className={`${question.answered ? "item-answered" : null}`}
            key = {Date.now()}
        >
            <p>{question.topic}</p>
            <p>{question.content}</p>
        </h4>
        <h4 onClick = { () => this.deleteQuestion(question.id)}>delete</h4>
    </div>
))}
</div> */}