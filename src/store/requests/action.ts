import { RequestActionTypes, RequestState } from "./types";
import OmaRequest from "../../models/OmaRequest";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import OmaRequests from "../../mockdataRequest";

import { ApplicationState } from "../index";


export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchRequestRequest: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: RequestActionTypes.FETCH_SUCCESS,
        payload: OmaRequests
      });
    } catch (e) {
      return dispatch({
        type: RequestActionTypes.FETCH_ERROR
      });
    }
  };
};


