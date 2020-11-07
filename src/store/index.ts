import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { History } from "history";

import { OmaReducer } from "./oma/reducer";
import { OmaState } from "./oma/types";


import { CarerReducer } from "./carers/reducer";
import { CarerState } from "./carers/types";

import { cartReducer } from "./booking/reducer";
import { cartState } from "./booking/types";
import { RouterState } from "connected-react-router";

export interface ApplicationState {
    cart: cartState;
    Oma: OmaState;
    Carer: CarerState;
    router: RouterState;
}

export const createRootReducer = (history: History) =>
    combineReducers({
        cart: cartReducer,
        Oma: OmaReducer,
        Carer: CarerReducer,
        router: connectRouter(history)
    });
