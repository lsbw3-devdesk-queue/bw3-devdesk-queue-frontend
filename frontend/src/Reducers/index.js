import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR,
    SIGNUP_START, 
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOG_OUT,
    USER_INFO_START,
    USER_INFO_SUCCESS,
    USER_INFO_ERROR,
} from '../Actions/LoginAndSignup';

import {
    FETCHING_TICKETS,
    TICKET_SUCCESS,
    PASS, 
    FAIL,
    ADD_TICKET,
    DELETE_TICKET
} from "../Actions/DataFetching";
import uuidv4 from 'uuid'

const initialState = {
    tickets: [],
    user: { username: '', role: '', id: '' },
    fetchingTickets: true,
    loggingIn: false,
    usersFetched: false,
    signingUp: false,
    loggedIn: false,
    error: null,
    edit: false,
    token: localStorage.getItem('jwt'),
};

const defaultState = {
    tickets: [],
    user: { username: '', role: '', id: '' },
    fetchingTickets: true,
    loggingIn: false,
    usersFetched: false,
    signingUp: false,
    loggedIn: false,
    error: null,
    edit: false,
    token: localStorage.getItem('jwt'),
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: null,
                loggingIn: true,
                loggedIn: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                loggingIn: false,
                loggedIn: true,
                token: action.payload.token,
                user: { ...state.user, username: action.payload.username }
            };
        case LOGIN_ERROR:
            return {
              ...state,
              loggingIn: false,
              error: action.payload
            };
        case SIGNUP_START:
            return {
                ...state,
                error: null,
                signingUp: true
            };
        case USER_INFO_START:
            return{
                ...state,
                error: null,
                usersFetched: false,
            }
        case USER_INFO_ERROR:
            return {
                ...state,
                error: action.payload
            } 
        case USER_INFO_SUCCESS:
            console.log(action.payload)
            const userData = action.payload.data.filter( user => user.username == 'testing' )[0]
            console.log(userData, 'userData');
            // console.log(state.user.username, 'username')
            console.log(action.payload.data)
            return {
                ...state,
                user: {
                    ...state.user,
                    username: userData.username,
                    role: userData.role,
                    id: userData.id
                }, 
                usersFetched: true,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                error: null,
                signingUp: false,
                loggedIn: true,
                token: uuidv4()
            };
        case SIGNUP_ERROR:
            return {
              ...state,
              signingUp: false,
              error: action.payload
            };
        case LOG_OUT:
            return defaultState;

        case ADD_TICKET:
            const newTicket = {
                loggedIn: true,
                id: action.payload
            };
            return {
                ...state,
                tickets: [ ...state.tickets, newTicket ]
            };
        case DELETE_TICKET:
            return{
                ...state,
                tickets: state.tickets.filter(
                    item => !(item.id === action.payload)
                )
            };

        case FETCHING_TICKETS:
            return {
                ...state,
                fetchingTickets: true
            };
        case TICKET_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                fetchingTickets: false,
                tickets: action.payload,
                usersFetched: false,
            };
        case PASS:
            let updatedTickets = [
                ...state.tickets,
            ]
            updatedTickets.forEach( ticket => { 
                if ( ticket.id === action.payload.id ){
                    ticket.helper_id = action.payload.helper_id;
                    ticket.status = action.payload.status;
                    ticket.updated_at = action.payload.updated_at;
                    // break;
                }
             } )
            return {
              ...state,
              fetchingTickets: false,
              tickets: [ ...updatedTickets ]
            }
        
        case FAIL:
            return {
              ...state,
              fetchingTickets: false,
              error: action.payload
            }
        default:
        return state;
    }

}

export default reducer;