import * as ActionTypes from './ActionTypes';

export const FurnitureItems = (state = {
    isLoading: true,
    errMess: null,
    furnitureItems: []
    }, action) => {

    switch (action.type) {
        case ActionTypes.SET_FURNITURE_QUANTITY:
            const furnitureItemsUpdated = state.furnitureItems.map(furniture => {
                if (furniture.id === action.payload.furniture.id) {
                    return { ...furniture, quantity: action.payload.quantity }
                } else {
                   return furniture
                }
            });
            return {...state, isLoading: false, errMess: null, furnitureItems: furnitureItemsUpdated};
        case ActionTypes.LOAD_FURNITURES:
            return {...state, isLoading: false, errMess: null, furnitureItems: action.payload};
        case ActionTypes.FURNITURES_LOADING:
            return {...state, isLoading: true, errMess: null, furnitureItems: []};
        case ActionTypes.FURNITURES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};