import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

// Pages
import Home from '../pages/Home.js';
import FilmPage from '../pages/FilmPage.js';
import Private from '../pages/Private.js';
import Login from '../pages/Login.js';
import Signup from '../pages/Signup.js';

// Helpers
import { PrivateRoute, PublicRoute } from '../helpers/utils';

const Routes = props => {
    const { authenticated, loading } = props;

    return loading === true ? (
        <h2>Loading</h2>
    ) : (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <PrivateRoute
                    path="/private"
                    authenticated={authenticated}
                    component={Private}
                ></PrivateRoute>
                <PublicRoute
                    path="/signup"
                    authenticated={authenticated}
                    component={Signup}
                ></PublicRoute>
                <PublicRoute
                    path="/login"
                    authenticated={authenticated}
                    component={Login}
                ></PublicRoute>
                <PublicRoute
                    path="/:id"
                    authenticated={authenticated}
                    component={FilmPage}
                ></PublicRoute>
            </Switch>
        </Router>
    );
};

export default Routes;
