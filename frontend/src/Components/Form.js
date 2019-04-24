import React, { Component } from "react";

class Form extends Component {
    constructor(props){
        super(props);
        if (this.props.ticket) {
            this.state = {
                status: this.props.ticket.status,
                title: this.props.ticket.title,
                description: this.props.ticket.description,
                student_id: this.props.ticket.student_id
            }
        } else {
            this.state = {
                status: '',
                title: '',
                description: '',
                student_id: localStorage.getItem("jwt")
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
                student_id: this.state.student_id
            }

            this.props.submit(ticket);
            this.setState({
                status: '',
                title: '',
                description: '',
                student_id: ''
            })
        }
        const ticket = {
            status: this.state.status,
            title: this.state.name,
            description: this.state.description,
            student_id: this.state.student_id
        }
        this.props.submit(ticket);
        this.setState({
            status: '',
            title: '',
            description: '',
            student_id: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name = 'title'
                    type = 'text'
                    value = {this.state.title}
                    placeholder = 'Title'
                    onChange={this.handleInput}
                />

                <input 
                    name = 'description'
                    type = 'text'
                    value = {this.state.description}
                    placeholder = 'Description'
                    onChange={this.handleInput}
                />

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

export default Form;