import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { URL, API_KEY } from '../helpers/utils.js';
import { Layout, Comments, CommentForm } from '../components';
import {
    addFavorite,
    removeFavorite,
} from '../store/actions/actions';
import Button from '@material-ui/core/Button';
import firebase from '../Firestore';

const FilmPage = props => {
    const dispatch = useDispatch();

    const favoriteMoviesIDs = useSelector(
        state => state.favoriteMoviesIDs
    );
    const favoriteMovies = useSelector(state => state.favoriteMovies);

    const [movieData, setMovieData] = useState(null);

    // const db = firebase.firestore();
    // db.settings({
    //     timestampsInSnapshots: true,
    // });
    // db.collection('users')
    //     .add({
    //         id: '154',
    //         name: 'Gelo',
    //     })
    //     .then(function(docRef) {
    //         console.log('Document written with ID: ', docRef.id);
    //     })
    //     .catch(function(error) {
    //         console.error('Error adding document: ', error);
    //     });
    // db.collection('users')
    //     .get()
    //     .then(querySnapshot => {
    //         querySnapshot.forEach(user => {
    //             console.log(`${user.id} => ${user.data()}`);
    //         });
    //     });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${URL}?apikey=${API_KEY}&i=${props.match.params.id}&p=full`
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
                <div>
                    <h1>{movieData.Title}</h1>
                    <img src={movieData.Poster} alt="" />
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
                    </div>
                    <p>Year: {movieData.Year}</p>
                    <p>Rated: {movieData.Rated}</p>
                    <p>Released: {movieData.Released}</p>
                    <p>Runtime: {movieData.Runtime}</p>
                    <p>Genre: {movieData.Genre}</p>
                    <p>Director: {movieData.Director}</p>
                    <p>Writer: {movieData.Writer}</p>
                    <p>Actors: {movieData.Actors}</p>
                    <p>Plot: {movieData.Plot}</p>
                    <p>Language: {movieData.Language}</p>
                    <p>Country: {movieData.Country}</p>
                    <p>Awards: {movieData.Awards}</p>
                    {movieData.Ratings.map(item => {
                        return (
                            <div key={item.Source}>
                                <b>{item.Source}</b>:{' '}
                                <span>{item.Value}</span>
                            </div>
                        );
                    })}
                </div>
            )}
            <Comments id={props.match.params.id}></Comments>
            <CommentForm id={props.match.params.id} />
        </Layout>
    );
};

export default FilmPage;
