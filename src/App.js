import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Routes from './navigation/routes.js';
import { store } from './store/store.js';
import Auth0Provider from './contexts/auth0-context';

import { saveState } from './helpers/localStorage.js';

import './App.css';
import 'antd/dist/antd.css';

store.subscribe(() => {
    saveState({
        favoriteMovies: store.getState().favoriteMovies,
        favoriteMoviesIDs: store.getState().favoriteMoviesIDs,
        users: store.getState().users,
        comments: store.getState().comments,
    });
});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Auth0Provider>
                    <Routes />
                </Auth0Provider>
            </Provider>
        );
    }
}

export default App;
