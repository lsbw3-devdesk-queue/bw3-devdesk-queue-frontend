import axios from "axios";

//FOR LOGIN
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const LOG_OUT = 'LOG_OUT';


//FOR LOGIN

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("https://devdesk-queue.herokuapp.com/api/auth/login", creds)
    .then(res => {
      localStorage.setItem("jwt", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });

    })
    .catch(err => dispatch({ type: LOGIN_ERROR, payload: err.res }));
};

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });

  return axios
    .post("https://devdesk-queue.herokuapp.com/api/auth/register", creds)
    .then(res => {
      localStorage.setItem("jwt", res.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.token});
    })
    .catch(err => console.log(err));
};

export const logOut = () => {
    localStorage.removeItem('jwt');
    return {
        type: LOG_OUT
    }
};