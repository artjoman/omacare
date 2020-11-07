import { Reducer } from "redux";
import { CarerActionTypes, CarerState } from "./types";

export const initialState: CarerState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<CarerState> = (state = initialState, action) => {
  switch (action.type) {
    case CarerActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case CarerActionTypes.FETCH_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case CarerActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as CarerReducer };
