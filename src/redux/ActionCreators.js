import * as ActionTypes from './ActionTypes';

export const addSingleFurniture = (furniture) => ({
    type: ActionTypes.ADD_SINGLE_FURNITURE,
    payload: {
        furniture: furniture
    }
});

export const removeSingleFurniture = (furniture) => ({
    type: ActionTypes.REMOVE_SINGLE_FURNITURE,
    payload: {
        furniture: furniture
    }
});

export const setMultipleFurnitures = (furniture, quantity) => ({
    type: ActionTypes.SET_MULTIPLE_FURNITURES,
    payload: {
        furniture: furniture,
        quantity: quantity
    }
});

export const deleteFurnitures = (furniture) => ({
    type: ActionTypes.DELETE_FURNITURES,
    payload: {
        furniture: furniture
    }
});
