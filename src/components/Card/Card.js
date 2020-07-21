import React from 'react';

//Components
import { Link } from 'react-router-dom';

const Card = props => {
    const { poster, title, year, imdbID, rating } = props;

    return (
        <figure className="card">
            <Link to={`/${imdbID}`}>
                <img
                    className="card__image"
                    src={poster}
                    alt={title}
                />
                <figcaption className="card__title">
                    <p>{title}</p>
                    <p>
                        <span className="text">{year}</span>
                    </p>
                    <span className="rating">{rating}</span>
                </figcaption>
            </Link>
        </figure>
    );
};

export default Card;
