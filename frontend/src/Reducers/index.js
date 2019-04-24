import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    SIGNUP_START, 
    SIGNUP_SUCCESS,
    LOG_OUT
} from '../Actions/LoginAndSignup';

import {
    FETCHING_QUESTIONS,
    QUESTION_SUCCESS,
    PASS, 
    FAIL,
    ADD_QUESTION,
    DELETE_QUESTION
} from "../Actions/DataFetching";

const initialState = {
    questions: [{topic: 'JSX', content: 'how?', answered: 'no'}],
    fetchingQuestions: true,
    loggingIn: false,
    signingUp: false,
    loggedIn: false,
    error: null,
    edit: false,
    token: localStorage.getItem('key')
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true 
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                token: action.payload
            };
        case SIGNUP_START:
            return {
                ...state,
                signingUp: true
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signingUp: false
            };
        case LOG_OUT:
            return {
              ...state,
              loggedIn: false,
              token: null
            };
        case ADD_QUESTION:
            const newQuestion = {
                topic: action.payload,
                id: Date.now(),
                answered: ''
            };
            return {
                ...state,
                questions: [ ...state.questions, newQuestion ]
            };
        case DELETE_QUESTION:
            return{
                ...state,
                questions: state.questions.filter(
                    item => !(item.id === action.payload)
                )
            };

        case FETCHING_QUESTIONS:
            return {
                ...state,
                fetchingQuestions: true
            };
        case QUESTION_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                fetchingQuestions: false,
                questions: action.payload,
            };
        case PASS:
            return {
              ...state,
              fetchingQuestions: false,
              smurfs: [...action.payload]
            }
        
        case FAIL:
            return {
              ...state,
              fetchingQuestions: false,
              error: action.payload
            }
        default:
        return state;
    }

}

export default reducer;