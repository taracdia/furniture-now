import * as ActionTypes from './ActionTypes';

export const users = (state = {
    isLoggedIn: false,
    user: {}
    }, action) => {

    switch (action.type) {
        case ActionTypes.LOG_IN:
            return {...state, user: action.payload.user, isLoggedIn: action.payload.isLoggedIn};
        case ActionTypes.CREATE_USER:
            return {...state, user: action.payload.user, isLoggedIn: action.payload.isLoggedIn};
        default:
            return state;
    }
};