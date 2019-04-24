import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR,
    SIGNUP_START, 
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOG_OUT
} from '../Actions/LoginAndSignup';

import {
    FETCHING_TICKETS,
    TICKET_SUCCESS,
    PASS, 
    FAIL,
    ADD_TICKET,
    // DELETE_QUESTION
} from "../Actions/DataFetching";
import uuidv4 from 'uuid'

const initialState = {
    tickets: [],
    fetchingTickets: true,
    loggingIn: false,
    signingUp: false,
    loggedIn: false,
    error: null,
    edit: false,
    token: localStorage.getItem('jwt')
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: null,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                token: action.payload
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
            return {
              ...state,
              loggedIn: false,
              token: uuidv4()
            };
        case ADD_TICKET:
            const newTicket = {
                loggedIn: true,
                id: action.payload
            };
            return {
                ...state,
                tickets: [ ...state.tickets, newTicket ]
            };
        // case DELETE_QUESTION:
        //     return{
        //         ...state,
        //         questions: state.questions.filter(
        //             item => !(item.id === action.payload)
        //         )
        //     };

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
            };
        case PASS:
            return {
              ...state,
              fetchingTickets: false,
              tickets: [...action.payload]
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