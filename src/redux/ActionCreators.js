import * as ActionTypes from './ActionTypes';
import FURNITURE_ITEMS from "../shared/furnitureItems"

export const setFurnitureQuantity = (furniture, quantity) => ({
    type: ActionTypes.SET_FURNITURE_QUANTITY,
    payload: {
        furniture: furniture,
        quantity: quantity
    }
});

export const fetchFurnitures = () => dispatch => {

    dispatch(furnituresLoading());

    setTimeout(() => {
        dispatch(loadFurnitures(FURNITURE_ITEMS));
    }, 2000);
};

export const furnituresLoading = () => ({
    type: ActionTypes.FURNITURES_LOADING
});

export const furnituresFailed = errMess => ({
    type: ActionTypes.FURNITURES_FAILED,
    payload: errMess
});

export const loadFurnitures = furnitures => ({
    type: ActionTypes.LOAD_FURNITURES,
    payload: furnitures
});