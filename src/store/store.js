import { createStore } from 'redux';
import { moviesReducer } from './reducers/reducer';
import { loadState } from '../helpers/localStorage.js';

const persistedState = loadState();

export const store = createStore(
    moviesReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
);
