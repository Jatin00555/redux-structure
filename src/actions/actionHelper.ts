export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const RESET = "RESET";

// This function will return Action Type object
export const createRequestTypes = (base: string) => {
  return [REQUEST, SUCCESS, FAILURE, RESET].reduce(
    (acc: { [key: string]: string }, type) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    {}
  );
};

export const action = (type: string, payload = {}) => {
  return { type, ...payload };
};

export const createActionCreators = <PayloadType, ResponseType>(
  actionType: { [key: string]: string },
  stopDataPayload: boolean = false
) => ({
  request: stopDataPayload
    ? () => action(actionType[REQUEST])
    : (data: PayloadType) => action(actionType[REQUEST], { data }),
  success: (response: ResponseType) =>
    action(actionType[SUCCESS], { response }),
  failure: () => action(actionType[FAILURE]),
  reset: () => action(actionType[RESET], {}),
});
