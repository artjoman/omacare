export interface Carer {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  currentCarer: number;
}

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
