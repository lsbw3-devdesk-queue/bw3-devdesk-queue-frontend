import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

import { combineReducers } from "redux";
import questionReducer from "../Reducers/questionReducer";

export default combineReducers({
    questionReducer
});