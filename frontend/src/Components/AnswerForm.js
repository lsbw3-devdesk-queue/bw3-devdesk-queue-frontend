import React, { Component } from "react";

class AnswerForm extends Component {
    constructor(props){
        super(props);
        if (this.props.ticket) {
            this.state = {
                status: this.props.ticket.status,
                title: this.props.ticket.title,
                description: this.props.ticket.description,
                id: this.props.ticket.id
            }
        } else {
            this.state = {
                status: '',
                title: '',
                description: '',
                id: ''
            }
        }
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.id) {
            const ticket = {
                status: this.state.status,
                title: this.state.title,
                description: this.state.description,
                id: this.state.id
            }

            this.props.submit(ticket);
            this.setState({
                status: '',
                title: '',
                description: '',
                id: ''
            })
        } else {
            alert('handleSubmit failed')
        }
        // const ticket = {
        //     status: this.state.status,
        //     title: this.state.title,
        //     description: this.state.description,
        //     id: this.state.id
        // }
        // this.props.submit(ticket);
        // this.setState({
        //     status: '',
        //     title: '',
        //     description: '',
        //     id: ''
        // })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <input 
                    name = 'status'
                    type = 'text'
                    value = {this.state.status}
                    placeholder = 'Status'
                    onChange={this.handleInput}
                />

                <button>{this.props.ticket ? 'save' : 'add'}</button>

            </form>
        );
    }
}

export default AnswerForm;