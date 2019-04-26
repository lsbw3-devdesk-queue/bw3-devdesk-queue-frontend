import axios from "axios";

//FOR LOGIN
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const LOG_OUT = 'LOG_OUT';
export const USER_INFO_START = 'USER_INFO_START';
export const USER_INFO_SUCCESS = 'USER_INFO_SUCCESS';
export const USER_INFO_ERROR = 'USER_INFO_ERROR';


//FOR LOGIN

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("https://devdesk-queue.herokuapp.com/api/auth/login", creds)
    .then(res => {
      localStorage.setItem("jwt", res.data.token);
      res.data.username = creds.username
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

      dispatch({ type: USER_INFO_START })
      return axios
        .get('https://devdesk-queue.herokuapp.com/api/users', { headers: { Authorization: localStorage.getItem("jwt") } } )
        .then(res => {
          // const userData = res.filter( user => user.useraname === res.data.username )
          // if (userData.length > 0 ) {
          //   dispatch({ type: USER_INFO_SUCCESS, payload: userData[0]})
          // } else {
          //   dispatch({ type: USER_INFO_ERROR, payload: 'User not found' })
          // }
          dispatch({ type: USER_INFO_SUCCESS ,payload: res})
        })
        .catch(err => dispatch({ type: USER_INFO_ERROR, payload: err }))
    })
    .catch(err => dispatch({ type: LOGIN_ERROR, payload: err }));
};

// export const userInfo = ( username ) => dispatch => {
//   dispatch({ type: USER_INFO_START })

//   return axios
//     .get('https://devdesk-queue.herokuapp.com/api/users', { headers: { Authorization: localStorage.getItem("jwt") } } )
//     .then(res => {
//       const userData = res.filter( user => user.useraname === username )
//       if (userData.length > 0 ) {
//         dispatch({ type: USER_INFO_SUCCESS, payload: userData[0]})
//       } else {
//         dispatch({ type: USER_INFO_ERROR, payload: 'User not found' })
//       }
//     })
//     .catch(err => dispatch({ type: USER_INFO_ERROR, payload: err.res }))
// }

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