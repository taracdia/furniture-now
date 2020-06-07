import * as ActionTypes from './ActionTypes';

export const comments = (state = {
    errMess: null,
    comments: []
    }, action) => {

    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            return {...state, errMess: null, comments: state.comments.concat(action.payload)};
        case ActionTypes.LOAD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
        case ActionTypes.COMMENTS_LOADING:
            return {...state, errMess: null, comments: []};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        default:
            return state;
    }
};

