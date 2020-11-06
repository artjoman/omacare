import { Reducer } from "redux";
import { OmaActionTypes, OmaState } from "./types";

export const initialState: OmaState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<OmaState> = (state = initialState, action) => {
  switch (action.type) {
    case OmaActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case OmaActionTypes.FETCH_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case OmaActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as OmaReducer };
