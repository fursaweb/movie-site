import { actionTypes } from './actionTypes';

export const addMovies = data => ({
    type: actionTypes.ADD_MOVIES,
    payload: data,
});

export const addFavorite = data => ({
    type: actionTypes.ADD_FAVORITE,
    payload: data,
});

export const removeFavorite = data => ({
    type: actionTypes.REMOVE_FAVORITE,
    payload: data,
});

export const addUser = data => ({
    type: actionTypes.ADD_USER,
    payload: data,
});

export const addComment = (id, name, comment) => ({
    type: actionTypes.ADD_COMMENT,
    id,
    name,
    comment,
});
