import * as ActionTypes from './ActionTypes';

export const LoggedIn = (state = {
    isLoggedIn: false,
    email: ""
}, action) => {
    switch (action.type) {
        case ActionTypes.LOG_IN:
            return {...state, email: action.payload.email, isLoggedIn: action.payload.isLoggedIn};
        default:
            return state;
    }
};