import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Card } from '../components';
import { Auth0Context } from '../contexts/auth0-context';

import Grid from '@material-ui/core/Grid';

const Private = () => {
    const { user } = useContext(Auth0Context);
    const movies = useSelector(state => state.favoriteMovies);

    return (
        <Layout>
            <div className="main-grid">
                <h1>Private</h1>
                <p>
                    {/* {user.picture && (
                        <img src={user.picture} alt="My Avatar" />
                    )} */}
                    {user.name}
                </p>
                <Grid container spacing={2}>
                    {movies &&
                        movies.map(item => {
                            return (
                                <Grid item xs={2} key={item.imdbID}>
                                    <Link to={`/${item.imdbID}`}>
                                        <Card
                                            imdbID={item.imdbID}
                                            title={item.Title}
                                            poster={item.Poster}
                                            year={item.Year}
                                        />
                                    </Link>
                                </Grid>
                            );
                        })}
                </Grid>
            </div>
        </Layout>
    );
};

export default Private;
