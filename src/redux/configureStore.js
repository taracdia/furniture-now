import {createStore, combineReducers, applyMiddleware } from 'redux';
import {FurnitureItems} from "./furnitureItems";
import {CheckoutOptions} from "./checkoutOptions";
import {LoggedIn} from "./loggedIn";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            furnitureItems: FurnitureItems,
            checkoutOptions: CheckoutOptions,
            loggedIn: LoggedIn
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}