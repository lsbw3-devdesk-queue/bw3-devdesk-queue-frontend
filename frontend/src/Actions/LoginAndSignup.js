import axios from "axios";

//FOR LOGIN
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const LOG_OUT = 'LOG_OUT';

///FOR QUESTIONS
export const ADD_QUESTION = 'ADD_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

//FOR LOGIN

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("https://devdesk-queue.herokuapp.com/api/auth/login", creds)
    .then(res => {
      localStorage.setItem("key", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });

    })
    .catch(err => dispatch({ type: LOGIN_ERROR, payload: err.res }));
};

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });

  return axios
    .post("https://devdesk-queue.herokuapp.com/api/auth/register", creds)
    .then(res => {
      localStorage.setItem("key", res.data.token);
      dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch(err => console.log(err));
};

export const logOut = () => {
    localStorage.removeItem('key');
    return {
        type: LOG_OUT
    }
};

//FOR QUESTIONS

export const addQuestion = topic => {
    console.log(topic);
    return {
        type: ADD_QUESTION,
        payload: topic
    }
}

export const deleteQuestion = id => {
    console.log('delete question', id);
    return {
        type: DELETE_QUESTION,
        payload: id
    }
}

export const answerQuestion = id => {
    return{
        type: ANSWER_QUESTION,
        payload: id
    }
}