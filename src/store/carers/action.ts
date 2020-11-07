import { CarerActionTypes } from "./types";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../index";
import Carer from "../../mockdataCarer";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchRequest: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: CarerActionTypes.FETCH_SUCCESS,
        payload: Carer
      });
    } catch (e) {
      return dispatch({
        type: CarerActionTypes.FETCH_ERROR
      });
    }
  };
};
