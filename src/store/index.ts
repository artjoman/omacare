import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { History } from "history";

// import OmaSaga from "./Oma/sagas";
import { OmaReducer } from "./oma/reducer";
import { OmaState } from "./oma/types";

// import cartSaga from "./cart/sagas";
import { cartReducer } from "./booking/reducer";
import { cartState } from "./booking/types";
import { RouterState } from "connected-react-router";

export interface ApplicationState {
    cart: cartState;
    Oma: OmaState;
    router: RouterState;
}

export const createRootReducer = (history: History) =>
    combineReducers({
        cart: cartReducer,
        Oma: OmaReducer,
        router: connectRouter(history)
    });
