import * as ActionTypes from './ActionTypes';

export const furnitures = (state = {
    isLoading: true,
    errMess: null,
    furnitures: []
    }, action) => {

    switch (action.type) {
        case ActionTypes.SET_FURNITURE_QUANTITY:
            const furnituresUpdated = state.furnitures.map(furniture => {
                if (furniture.id === action.payload.furniture.id) {
                    return { ...furniture, quantity: action.payload.quantity }
                } else {
                   return furniture
                }
            });
            return {...state, isLoading: false, errMess: null, furnitures: furnituresUpdated};
        case ActionTypes.LOAD_FURNITURES:
            return {...state, isLoading: false, errMess: null, furnitures: action.payload};
        case ActionTypes.FURNITURES_LOADING:
            return {...state, isLoading: true, errMess: null, furnitures: []};
        case ActionTypes.FURNITURES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};

