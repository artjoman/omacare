import OmaRequest from "../../models/OmaRequest";

export enum RequestActionTypes {
  FETCH_REQUEST = "@@request/FETCH_REQUEST",
  FETCH_SUCCESS = "@@request/FETCH_SUCCESS",
  FETCH_ERROR = "@@request/FETCH_ERROR"
}

export interface RequestState {
  readonly loading: boolean;
  readonly data: OmaRequest[];
  readonly errors?: string;
}
