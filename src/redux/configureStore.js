import {createStore, combineReducers, applyMiddleware } from 'redux';
import {furnitures} from "./furnitures";
import {comments} from "./comments";
import {CheckoutOptions} from "./checkoutOptions";
import {users} from "./users";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            furnitures: furnitures,
            checkoutOptions: CheckoutOptions,
            users: users,
            comments: comments
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}