import { OmaActionTypes } from "./types";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../index";
import Oma from "../../mockdata";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchRequest: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: OmaActionTypes.FETCH_SUCCESS,
        payload: Oma
      });
    } catch (e) {
      return dispatch({
        type: OmaActionTypes.FETCH_ERROR
      });
    }
  };
};
