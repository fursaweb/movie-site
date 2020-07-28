import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { URL, API_KEY } from '../helpers/API.js';
import {
    addFavorite,
    removeFavorite,
} from '../store/actions/actions';
import firebase from '../config';

//Components
import { Layout, Comments, CommentForm } from '../components';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

//Media
import imdb_logo from '../media/imdb_logo.png';
import rt_logo from '../media/rt_logo.png';
import metacritic_logo from '../media/metacritic_logo.png';

const FilmPage = props => {
    const [movieData, setMovieData] = useState(null);

    const dispatch = useDispatch();

    const favoriteMoviesIDs = useSelector(
        state => state.favoriteMoviesIDs
    );
    const favoriteMovies = useSelector(state => state.favoriteMovies);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${URL}?apikey=${API_KEY}&i=${props.match.params.id}&plot=full`
            );
            const data = await response.json();
            favoriteMoviesIDs.includes(props.match.params.id)
                ? (data.isFavorite = true)
                : (data.isFavorite = false);

            setMovieData(data);
        };
        fetchData();
    }, [props.match.params.id, favoriteMoviesIDs, favoriteMovies]);

    const addToFavorite = () => {
        movieData.isFavorite
            ? dispatch(removeFavorite(props.match.params.id))
            : dispatch(addFavorite(movieData));

        movieData.isFavorite = !movieData.isFavorite;
    };

    return (
        <Layout>
            {movieData && (
                <div style={{ paddingTop: 30, marginBottom: 30 }}>
                    <h1 className="h1">{movieData.Title}</h1>
                    <p>{movieData.Year}</p>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4} md={4}>
                            <figure>
                                <img
                                    className="poster"
                                    src={movieData.Poster}
                                    alt=""
                                />
                            </figure>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <div>
                                {movieData.Ratings.map(item => {
                                    if (
                                        item.Source.includes('Movie')
                                    ) {
                                        return (
                                            <div className="rating-box">
                                                <img
                                                    className="rating-icon"
                                                    src={imdb_logo}
                                                    alt=""
                                                />{' '}
                                                <span>
                                                    {item.Value}
                                                </span>
                                            </div>
                                        );
                                    } else if (
                                        item.Source.includes('Rotten')
                                    ) {
                                        return (
                                            <div className="rating-box">
                                                <img
                                                    className="rating-icon"
                                                    src={rt_logo}
                                                    alt=""
                                                />{' '}
                                                <span>
                                                    {item.Value}
                                                </span>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div className="rating-box">
                                                <img
                                                    className="rating-icon"
                                                    src={
                                                        metacritic_logo
                                                    }
                                                    alt=""
                                                />{' '}
                                                <span>
                                                    {item.Value}
                                                </span>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            <div className="film-info">
                                <p>
                                    <strong>Released</strong>:{' '}
                                    {movieData.Released}
                                </p>
                                <p>
                                    <strong>Runtime</strong>:{' '}
                                    {movieData.Runtime}
                                </p>
                                <p>
                                    <strong>Genre</strong>:{' '}
                                    {movieData.Genre}
                                </p>
                                <p>
                                    <strong>Director</strong>:{' '}
                                    {movieData.Director}
                                </p>
                                <p>
                                    <strong>Writer</strong>:{' '}
                                    {movieData.Writer}
                                </p>
                                <p>
                                    <strong>Actors</strong>:{' '}
                                    {movieData.Actors}
                                </p>
                                <p>
                                    <strong>Country</strong>:{' '}
                                    {movieData.Country}
                                </p>
                                <p>
                                    <strong>Awards</strong>:{' '}
                                    {movieData.Awards}
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={addToFavorite}
                        >
                            {!movieData.isFavorite
                                ? 'Add to Wishlist'
                                : 'Remove from Wishlist'}
                        </Button>

                        <div>
                            <h2 className="h2">Description</h2>
                            <p>{movieData.Plot}</p>
                        </div>
                    </div>
                </div>
            )}
            <h2 className="h2">Comments</h2>
            <Comments id={props.match.params.id}></Comments>
            <CommentForm id={props.match.params.id} />
        </Layout>
    );
};

export default FilmPage;
