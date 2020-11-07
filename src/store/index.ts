import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { CarerReducer } from "./carers/reducer";
import { CarerState } from "./carers/types";
import { RequestReducer } from "./requests/reducer";
import { RequestState } from "./requests/types";
import { RouterState } from "connected-react-router";

export interface ApplicationState {
    requests: RequestState;
    carers: CarerState;
    router: RouterState;
}

export const createRootReducer = (history: History) =>
    combineReducers({
        requests: RequestReducer,
        carers: CarerReducer,
        router: connectRouter(history)
    });
