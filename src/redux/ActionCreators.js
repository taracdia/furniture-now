import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const setFurnitureQuantity = (furniture, quantity) => ({
    type: ActionTypes.SET_FURNITURE_QUANTITY,
    payload: {
        furniture: furniture,
        quantity: quantity
    }
});

export const fetchFurnitures = () => dispatch => {

    dispatch(furnituresLoading());

    return fetch(baseUrl + "furnitureItems")
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
        },
            error => {
                throw new Error(error.message);
            }
        )
        .then(response => response.json())
        .then(furnitures => dispatch(loadFurnitures(furnitures)))
        .catch(error => dispatch(furnituresFailed(error.message)));
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






export const postComment = (furnitureId, rating, author, text) => dispatch => {
    
    const newComment = {
        furnitureId: furnitureId,
        rating: rating,
        author: author,
        text: text
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
            method: "POST",
            body: JSON.stringify(newComment),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('post comment', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        });
};

export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const fetchComments = () => dispatch => {

    dispatch(commentsLoading());

    return fetch(baseUrl + "comments")
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
        },
            error => {
                throw new Error(error.message);
            }
        )
        .then(response => response.json())
        .then(comments => dispatch(loadComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsLoading = () => ({
    type: ActionTypes.FURNITURES_LOADING
});

export const commentsFailed = errMess => ({
    type: ActionTypes.FURNITURES_FAILED,
    payload: errMess
});

export const loadComments = comments => ({
    type: ActionTypes.LOAD_FURNITURES,
    payload: comments
});