import { createStore, combineReducers } from "redux";
import {FurnitureItems} from "./furnitureItems";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            furnitureItems: FurnitureItems
        })
    );
    return store;
}