import Carer from "../../models/Carers";

export enum CarerActionTypes {
  FETCH_REQUEST = "@@Oma/FETCH_REQUEST",
  FETCH_SUCCESS = "@@Oma/FETCH_SUCCESS",
  FETCH_ERROR = "@@Oma/FETCH_ERROR"
}

export interface CarerState {
  readonly loading: boolean;
  readonly data: Carer[];
  readonly errors?: string;
}
