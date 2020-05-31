import {createStore, combineReducers, applyMiddleware } from 'redux';
import {FurnitureItems} from "./furnitureItems";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            furnitureItems: FurnitureItems,
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}