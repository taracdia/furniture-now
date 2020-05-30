import { FURNITURE_ITEMS } from '../shared/furnitureItems';
import * as ActionTypes from './ActionTypes';

export const FurnitureItems = (state = FURNITURE_ITEMS, action) => {
    const stateUpdated = [];

    switch (action.type) {
        case ActionTypes.ADD_SINGLE_FURNITURE:
            state.map(furniture => {
                if (furniture.id === action.payload.furniture.id) {
                    stateUpdated.push({ ...furniture, quantity: furniture.quantity + 1 })
                } else {
                    stateUpdated.push(furniture)
                }
            });
            return stateUpdated;
        case ActionTypes.REMOVE_SINGLE_FURNITURE:
            state.map(furniture => {
                if (furniture.id === action.payload.furniture.id) {
                    stateUpdated.push({ ...furniture, quantity: furniture.quantity - 1 })
                } else {
                    stateUpdated.push(furniture)
                }
            });
            return stateUpdated;
        case ActionTypes.SET_MULTIPLE_FURNITURES:
            state.map(furniture => {
                if (furniture.id === action.payload.furniture.id) {
                    stateUpdated.push({ ...furniture, quantity: action.payload.quantity})
                } else {
                    stateUpdated.push(furniture)
                }
            });
            return stateUpdated;
        case ActionTypes.DELETE_FURNITURES:
            state.map(furniture => {
                if (furniture.id === action.payload.furniture.id) {
                    console.log("delete")
                    stateUpdated.push({ ...furniture, quantity: 0 })
                } else {
                    stateUpdated.push(furniture)
                }
            });
            // console.log(stateUpdated)
            return stateUpdated;
        default:
            return state;
    }
};