import { combineReducers } from "redux";
import { LOGIN } from "./../actions/actionTypes.ts";
import { createReducer } from "./reducerHelper.ts";

const login = createReducer(LOGIN);

const authReducer = combineReducers({
  login,
});

export default authReducer;
