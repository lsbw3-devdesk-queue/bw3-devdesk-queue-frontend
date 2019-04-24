import axios from "axios";

export const FETCHING_TICKETS = "FETCHING_TICKETS";
export const TICKET_SUCCESS = "TICKETS_SUCCESS";
export const PASS = 'PASS';
export const FAIL = 'FAIL';
export const ADD_TICKET = 'ADD_TICKET';
export const ANSWER_TICKET = 'ANSWER_TICKET';
// export const DELETE_TICKET = 'DELETE_TICKET';

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


export const addTicket = ticket => dispatch => {
    dispatch({ type: ADD_TICKET });

    const endpoint = 'https://devdesk-queue.herokuapp.com/api/tickets'
    return axios
        .post( endpoint, { headers: { Authorization: localStorage.getItem("jwt") }}, ticket )
        .then( response => {
            dispatch({ type: PASS, payload: response.data.ticket });
        })
        .catch( error => {
            dispatch({ type: FAIL, payload: error });
        })

}

export const answerTicket = ticket => dispatch => {
    dispatch({ type: ANSWER_TICKET});

    const endpoint = 'https://devdesk-queue.herokuapp.com/api/tickets'
    axios
        .put( `${endpoint}/ ${ticket.id}`, ticket )
        .then(response => {
            dispatch({ type: PASS, payload: response.data });
        })
        .catch( error => {
            dispatch({ type: FAIL, payload: error });
        })
}

// export const deleteQuestion = question => dispatch => {
//     dispatch({ type: DELETE_QUESTION });
//     return axios
//         .delete( endpoint, question )
//         .then( response => {
//             dispatch({ type: PASS, payload: response.data });
//         })
//         .catch( error => {
//             dispatch({ type: FAIL, payload: error });
//         })

// }