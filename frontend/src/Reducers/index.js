import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    SIGNUP_START, 
    SIGNUP_SUCCESS,
    LOG_OUT
} from '../Actions/LoginAndSignup';

const initialState = {
    deskData: [],
    loggingIn: false,
    signingUp: false,
    loggedIn: false,
    error: null,
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
        default:
        return state;
    }

}

export default reducer;