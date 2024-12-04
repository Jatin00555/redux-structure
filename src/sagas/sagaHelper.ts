import { AxiosResponse } from "axios";
import { Action } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { FAILURE, SUCCESS } from "../actions/actionHelper.ts";

export interface ActionWithDataForSaga<T> extends Action {
  data: T;
}

export function* sendPayload(apiResponse: any, event: { [x: string]: any }) {
  yield put({
    type: apiResponse ? event[SUCCESS] : event[FAILURE],
    payload: apiResponse?.data || apiResponse?.data?.error || {},
    url: apiResponse?.request?.responseURL,
    statusCode: apiResponse?.request?.status,
    requestMeta: apiResponse?.config?.requestMeta,
  });
}

export function* sendPayloadFailure(
  error: any,
  event: { [x: string]: any },
  payload?: any
) {
  yield put({
    type: event[FAILURE],
    payload: error.response ? error.response : {},
  });
}

export function* handleApiCall<TPayload>(
  apiMethod: (payload: TPayload) => Promise<AxiosResponse<any, any>>,
  actionType: { [key: string]: string },
  data: ActionWithDataForSaga<TPayload>
) {
  try {
    const apiResponse: Generator<string, number, string> = yield call(
      apiMethod,
      data?.data
    );
    yield sendPayload(apiResponse, actionType);
  } catch (e) {
    yield sendPayloadFailure(e, actionType);
  }
}

export function* handleApiCallWithoutPayload<TPayload>(
  apiMethod: () => Promise<AxiosResponse<any, any>>,
  actionType: { [key: string]: string }
) {
  try {
    const apiResponse: Generator<string, number, string> = yield call(
      apiMethod
    );
    yield sendPayload(apiResponse, actionType);
  } catch (e) {
    yield sendPayloadFailure(e, actionType);
  }
}
