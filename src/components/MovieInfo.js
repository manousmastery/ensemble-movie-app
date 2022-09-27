import React from 'react'
import './MovieInfo.css';

const MovieInfo = ({ movie }) => {
    return (
        <div className='movieInfo'>{movie.Title}</div>
    )
}

export default MovieInfo