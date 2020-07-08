import React from 'react'
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    // Link,
} from 'react-router-dom'

import Home from '../pages/Home.js'
import FilmPage from '../pages/FilmPage.js'
import Private from '../pages/Private.js'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route
                    exact
                    path="/private"
                    render={() => <Private />}
                />
                <Route
                    path="/:id"
                    render={props => <FilmPage {...props} />}
                />
            </Switch>
        </div>
    )
}

export default Routes
