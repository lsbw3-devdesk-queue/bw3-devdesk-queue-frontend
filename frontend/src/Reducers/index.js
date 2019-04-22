import { LOGIN_START, LOGIN_SUCCESS, SIGNUP_START, SIGNUP_SUCCESS, LOGIN_ERROR } from '../Actions/LoginAndSignup';

const initialState = {
    deskData: [],
    loggingIn: false,
    signingUp: false,
    loggedIn: false,
    error: null,
    token: localStorage.getItem('jwt')
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

        case LOGIN_ERROR:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
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

        default:
        return state;
    }

}

export default reducer;