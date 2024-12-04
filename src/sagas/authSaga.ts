import { LOGIN } from "../actions/actionTypes.ts";
import { ActionWithDataForSaga, handleApiCall } from "./sagaHelper.ts";
import * as ApiService from "../services/index.ts";
import { REQUEST } from "../actions/actionHelper.ts";
import { takeLatest } from "redux-saga/effects";

export function* login(data: ActionWithDataForSaga<{ [key: string]: string }>) {
  yield handleApiCall(ApiService.login, LOGIN, data);
}

export const sagas = {
  [LOGIN[REQUEST]]: takeLatest(LOGIN[REQUEST], login),
};
