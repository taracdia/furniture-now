import {createStore, combineReducers, applyMiddleware } from 'redux';
import {furnitures} from "./furnitures";
import {CheckoutOptions} from "./checkoutOptions";
import {LoggedIn} from "./loggedIn";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            furnitures: furnitures,
            checkoutOptions: CheckoutOptions,
            loggedIn: LoggedIn
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}