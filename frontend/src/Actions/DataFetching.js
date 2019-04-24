import axios from "axios";

export const FETCHING_TICKETS = "FETCHING_TICKETS";
export const TICKET_SUCCESS = "TICKETS_SUCCESS";
export const PASS = 'PASS';
export const FAIL = 'FAIL';
export const ADD_TICKET = 'ADD_TICKET';
export const ANSWER_TICKET = 'ANSWER_TICKET';
export const DELETE_TICKET = 'DELETE_TICKET';

export const getTickets = () => dispatch => {
    dispatch({ type: FETCHING_TICKETS });

    const endpoint = 'https://devdesk-queue.herokuapp.com/api/tickets';

    return axios
        .get(endpoint, { headers: { Authorization: localStorage.getItem("jwt") }} )
        .then(res =>
            dispatch({

                type: TICKET_SUCCESS,
                payload: res.data
            })
        )
        .catch(err => console.log(err));
};


export const addTicket = () => dispatch => {
    dispatch({ type: ADD_TICKET });

    const endpoint = 'https://devdesk-queue.herokuapp.com/api/tickets'
    return axios
        .post( endpoint, { headers: { Authorization: localStorage.getItem("jwt")}} )
        .then( response => {
            dispatch({ type: PASS, payload: response.data.token });
        })
        .catch( error => {
            dispatch({ type: FAIL, payload: error });
        })

}

export const answerTicket = (ticket, role, id) => dispatch => {
    dispatch({ type: ANSWER_TICKET});

    const endpoint = `https://devdesk-queue.herokuapp.com/api/tickets/${id}`
    axios
        .put( endpoint, ticket, { headers: { Authorization: localStorage.getItem("jwt"), role: role }}   )
        .then(response => {
            dispatch({ type: PASS, payload: response.data.token });
        })
        .catch( error => {
            dispatch({ type: FAIL, payload: error });
        })
}

export const deleteTicket = (ticket, id) => dispatch => {
    dispatch({ type: DELETE_TICKET });

    const endpoint = `https://devdesk-queue.herokuapp.com/api/tickets/${id}`
    return axios
        .delete( endpoint, ticket, { headers: { Authorization: localStorage.getItem("jwt")}} )
        .then( response => {
            dispatch({ type: PASS, payload: response.data.token });
        })
        .catch( error => {
            dispatch({ type: FAIL, payload: error });
        })

}