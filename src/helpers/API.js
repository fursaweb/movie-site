import { useDispatch } from 'react-redux';

export const URL = 'http://www.omdbapi.com/';
export const API_KEY = '269fa19d';

export const fetchMovies = async query => {
    try {
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
        return movies;
    } catch (e) {
        console.log(e);
    }
    // dispatch(addMovies(movies));
};
