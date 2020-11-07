import { Reducer } from "redux";
import { RequestActionTypes, RequestState } from "./types";

export const initialState: RequestState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<RequestState> = (state = initialState, action) => {
  switch (action.type) {
    case RequestActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case RequestActionTypes.FETCH_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case RequestActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as RequestReducer };
