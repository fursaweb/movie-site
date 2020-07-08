import { actionTypes } from '../actions/actionTypes';

const initialState = {
    movies: [],
    favoriteMovies: [],
    favoriteMoviesIDs: [],
    users: [],
    comments: {},
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_MOVIES:
            return Object.assign({}, state, {
                movies: action.payload,
            });
        case actionTypes.ADD_FAVORITE:
            return Object.assign({}, state, {
                users: {
                    favoriteMoviesIDs: [
                        ...state.favoriteMoviesIDs,
                        action.payload.imdbID,
                    ],
                    favoriteMovies: [
                        ...state.favoriteMovies,
                        action.payload,
                    ],
                },
            });
        case actionTypes.REMOVE_FAVORITE:
            const i = state.favoriteMoviesIDs.indexOf(action.payload);
            return Object.assign({}, state, {
                favoriteMoviesIDs: [
                    ...state.favoriteMoviesIDs.slice(0, i),
                    ...state.favoriteMoviesIDs.slice(i + 1),
                ],
                favoriteMovies: [
                    ...state.favoriteMovies.slice(0, i),
                    ...state.favoriteMovies.slice(i + 1),
                ],
            });

        case actionTypes.ADD_COMMENT:
            if (!state.comments[action.id]) {
                return Object.assign({}, state, {
                    comments: {
                        ...state.comments,
                        [action.id]: [
                            ...[
                                {
                                    name: action.name,
                                    comment: action.comment,
                                },
                            ],
                        ],
                    },
                });
            } else {
                return Object.assign({}, state, {
                    comments: {
                        ...state.comments,
                        [action.id]: [
                            ...state.comments[action.id],
                            ...[
                                {
                                    name: action.name,
                                    comment: action.comment,
                                },
                            ],
                        ],
                    },
                });
            }
        default:
            return state;
    }
};

// const comment = (state, action) => {
//     if (typeof action.id !== 'undefined') {
//         return Object.assign({}, state, {
//             [action.id]: {
//                 name: action.name,
//                 comment: action.comment,
//             },
//         });
//     }
// };
