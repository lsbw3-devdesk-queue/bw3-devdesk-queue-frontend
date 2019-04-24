import React from 'react';
import { getTickets } from '../Actions/DataFetching';
import Ticket from './Tickets';
import { connect } from 'react-redux';
import uuidv4 from 'uuid'

class TicketList extends React.Component {
    componentDidMount() {
        this.props.getTickets();
    }

    render(){
        return(
            <div className='questionList'>
                
                {this.props.tickets.map( ticket => (
                    <Ticket ticket={ticket} key={uuidv4()}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        tickets: state.tickets
    }
}

export default connect (
    mapStateToProps,
    {getTickets}
) (TicketList);