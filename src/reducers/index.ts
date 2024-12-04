import { combineReducers } from "redux";
import authReducer from "./authReducer.ts";

const reducers = () =>
  combineReducers({
    authReducer,
  });
export default reducers;
