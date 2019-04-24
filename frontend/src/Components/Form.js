import React from 'react';

export default class Form extends React.Component {
    constructor(props){
        super(props);
        if (this.props.question) {
            this.state = {
                id: this.props.question.id,
                topic: this.props.topic,
                content: this.props.content,
                answered: this.props.answered
            }
        } else {
            this.state = {
                id: null,
                topic: '',
                content: '',
                answered: ''
            }
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.id) {
            const question = {
                id: this.state.id,
                topic: this.state.topic,
                content: this.state.content,
                answered: this.state.answered
            }

            this.props.submit(question);
            this.setState({
                id: null,
                topic: '',
                content: '',
                answered: ''
            })
        }   
        const question = {
            id: this.state.id,
            topic: this.state.topic,
            content: this.state.content,
            answered: this.state.answered
        }  
        this.props.submit(question);
        this.setState({
            id: null,
            topic: '',
            content: '',
            answered: ''
        })       
    }
    

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>

                <input 
                    name = 'question'
                    type = 'text'
                    value = {this.state.answered}
                    placeholder = 'Question'
                    onChange={this.handleInput}
                />

                <button className='buttonOnForm'>save</button>
                
            </form>
        )
    }


}