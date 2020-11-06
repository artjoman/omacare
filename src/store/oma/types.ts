export interface Oma {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  brand?: string;
  currentOma: number;
}

export enum OmaActionTypes {
  FETCH_REQUEST = "@@Oma/FETCH_REQUEST",
  FETCH_SUCCESS = "@@Oma/FETCH_SUCCESS",
  FETCH_ERROR = "@@Oma/FETCH_ERROR"
}

export interface OmaState {
  readonly loading: boolean;
  readonly data: Oma[];
  readonly errors?: string;
}
