import { all } from "redux-saga/effects";
import { sagas as authSagas } from "./authSaga.ts";

export default function* rootSaga() {
  yield all({ ...authSagas });
}
