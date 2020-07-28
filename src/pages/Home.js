//Core
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovies } from '../store/actions/actions';

//Components
import { Layout, Card } from '../components';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

//Helpers
import { fetchMovies } from '../helpers/API.js';

const Home = () => {
    const [query, setQuery] = useState('');
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [moviesLoading, setMoviesLoading] = useState(true);
    const dispatch = useDispatch();

    // let movies = [];
    const movies = useSelector(state => state.movies);

    const fetchNews = async () => {
        try {
            const response = await fetch(
                `http://newsapi.org/v2/everything?q=movies%20news&from=2020-07-15&sortBy=relevancy&apiKey=86068e237b2149ada6ffd012401d534b`
            );
            const data = await response.json();
            setNews(data.articles);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    const handleChange = e => {
        setQuery(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const movies = await fetchMovies(query);
        dispatch(addMovies(movies));
        setMoviesLoading(false);
    };

    return (
        <Layout>
            <div className="main-grid">
                <form className="search-form" onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-basic"
                        label="Type film title"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        value={query}
                    />
                </form>

                <Grid container spacing={2}>
                    {!moviesLoading &&
                        movies.length !== 0 &&
                        movies.map(item => {
                            return (
                                <Grid
                                    item
                                    xs={6}
                                    sm={4}
                                    md={2}
                                    key={item.imdbID}
                                >
                                    <Card
                                        imdbID={item.imdbID}
                                        title={item.Title}
                                        poster={item.Poster}
                                        year={item.Year}
                                        rating={item.imdbRating}
                                    />
                                </Grid>
                            );
                        })}
                </Grid>

                {/* {loading ? (
                    <h2>Loading</h2>
                ) : (
                    <Grid container spacing={2}>
                        {news &&
                            news.map((item, index) => {
                                return (
                                    <Grid
                                        item
                                        xs={6}
                                        sm={4}
                                        md={2}
                                        key={item.title + index}
                                    >
                                        <Card
                                            // imdbID={item.imdbID}
                                            title={item.title}
                                            poster={item.urlToImage}
                                            key={item.title}
                                            // year={item.Year}
                                        />
                                    </Grid>
                                );
                            })}
                    </Grid>
                )} */}
            </div>
        </Layout>
    );
};

export default Home;
