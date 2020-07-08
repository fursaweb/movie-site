import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovies } from '../store/actions/actions';
import { Layout, Card } from '../components';
import { URL, API_KEY } from '../helpers/utils.js';

import Grid from '@material-ui/core/Grid';

const Home = () => {
    const dispatch = useDispatch();

    const [query, setQuery] = useState('');
    const handleChange = e => {
        setQuery(e.target.value);
    };

    const fetchData = async () => {
        const response = await fetch(
            `${URL}?apikey=${API_KEY}&s=${query}`
        );
        const data = await response.json();
        const promises = data.Search.map(async item => {
            const response = await fetch(
                `${URL}?apikey=${API_KEY}&i=${item.imdbID}`
            );
            return response.json();
        });
        const movies = await Promise.all(promises);
        dispatch(addMovies(movies));
    };

    const handleSubmit = e => {
        fetchData();
        e.preventDefault();
    };

    const movies = useSelector(state => state.movies);

    return (
        <Layout>
            <div className="main-grid">
                <form className="search-form" onSubmit={handleSubmit}>
                    <input
                        placeholder="input search text"
                        onChange={handleChange}
                        style={{ width: 200 }}
                        value={query}
                    />
                </form>

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

export default Home;
