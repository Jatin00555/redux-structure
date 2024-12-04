export const buildReducerStructure = (
  data: any,
  status: boolean,
  error: string | null = null,
  isLoading: boolean = false
) => {
  return {
    data: data,
    error: error,
    status: status,
    isLoading: isLoading,
  };
};

export const createReducer = (
  actionTypes: Record<string, string>,
  initialState: any = null
) => {
  return (state = buildReducerStructure(initialState, false), action: any) => {
    const { type, payload } = action;

    switch (type) {
      case actionTypes.SUCCESS:
        return buildReducerStructure(payload, true);
      case actionTypes.REQUEST:
        return buildReducerStructure(null, false, null, true);
      case actionTypes.FAILURE:
        return buildReducerStructure(null, false, payload);
      case actionTypes.RESET:
        return buildReducerStructure(null, false);
      default:
        return state;
    }
  };
};
