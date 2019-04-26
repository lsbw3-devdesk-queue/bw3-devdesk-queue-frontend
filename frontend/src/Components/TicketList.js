import React from 'react';
import { getTickets } from '../Actions/DataFetching';
import Ticket from './Tickets';
import { connect } from 'react-redux';


class TicketList extends React.Component {
    componentDidUpdate(prevProps) {
        console.log('A')
        if (this.props.usersFetched){
            console.log('B')
            this.props.getTickets();
        }
    }
    
    render(){
        console.log(this.props);
        return(
            <div className='questionList'>
                
                {this.props.tickets.map( ticket => (
                    <Ticket ticket={ticket} key={ticket.id}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        tickets: state.tickets,
        usersFetched: state.usersFetched

    }
}

export default connect (
    mapStateToProps,
    {getTickets}
) (TicketList);