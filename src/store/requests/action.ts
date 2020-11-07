import { RequestActionTypes, RequestState } from "./types";
import OmaRequest from "../../models/OmaRequest";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import Requests from "../../mockdata";

import { ApplicationState } from "../index";

export type AppThunk = ThunkAction<
  void,
  ApplicationState,
  null,
  Action<string>
>;

export const fetchRequestRequest: AppThunk = () => {
  return (dispatch: Dispatch, state: ApplicationState): Action => {
    try {
      return dispatch({
        type: RequestActionTypes.FETCH_SUCCESS,
        payload: Requests
      });
    } catch (e) {
      return dispatch({
        type: RequestActionTypes.FETCH_ERROR
      });
    }
  };
};

