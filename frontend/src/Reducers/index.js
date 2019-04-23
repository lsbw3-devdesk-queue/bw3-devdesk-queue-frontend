import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    SIGNUP_START, 
    SIGNUP_SUCCESS,
    LOG_OUT,
    ADD_QUESTION,
    DELETE_QUESTION
} from '../Actions/LoginAndSignup';

const initialState = {
    questions: [ { topic: 'CSS', content: 'What is Flexbox used for?', answered: false , id: 1234567} ],
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
                answered: false
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
        default:
        return state;
    }

}

export default reducer;