import axios from "axios";

export const FETCHING_QUESTIONS = "FETCHING_QUESTIONS";
export const QUESTION_SUCCESS = "QUESTION_SUCCESS";
export const PASS = 'PASS';
export const FAIL = 'FAIL';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';

const endpoint = "https://devdesk-queue.herokuapp.com/api/auth/questions";

export const getQuestions = () => dispatch => {
    dispatch({ type: FETCHING_QUESTIONS });
    return axios
        .get(endpoint, { headers: { Authorization: localStorage.getItem("key") } })
        .then(res =>
            dispatch({
                type: QUESTION_SUCCESS,
                payload: res.data.localStorage
            })
        )
        .catch(err => console.log(err));
};


export const addQuestion = question => dispatch => {
    dispatch({ type: ADD_QUESTION });
    return axios
        .post( endpoint, question )
        .then( response => {
            dispatch({ type: PASS, payload: response.data });
        })
        .catch( error => {
            dispatch({ type: FAIL, payload: error });
        })

}

export const answerQuestion = question => dispatch => {
    dispatch({ type: ANSWER_QUESTION });
    axios
        .put( `${endpoint}/ ${question.id}`, question )
        .then(response => {
            dispatch({ type: PASS, payload: response.data });
        })
        .catch( error => {
            dispatch({ type: FAIL, payload: error });
        })
}

export const deleteQuestion = question => dispatch => {
    dispatch({ type: DELETE_QUESTION });
    return axios
        .delete( endpoint, question )
        .then( response => {
            dispatch({ type: PASS, payload: response.data });
        })
        .catch( error => {
            dispatch({ type: FAIL, payload: error });
        })

}