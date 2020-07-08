import React from 'react'

const Card = props => {
    // console.log(props)
    const { poster, title, year } = props

    return (
        <figure className="">
            <img className="card__image" src={poster} alt={title} />
            <figcaption className="card__title">
                <p>{title}</p>
                <p>
                    <span>{year}</span>
                </p>
            </figcaption>
        </figure>
    )
}

export default Card
