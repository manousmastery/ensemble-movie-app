import React from 'react'
import './Movie.css';

const Movie = ({ movie, setMovieDisplayed }) => {
    const displayMovieInfo = (movie) => {
        // setMovieDisplayed(movie)
        // window.scrollTo({
        //     top: 0,
        //     behavior: "smooth"
        // })
    }
    return (
        <div className='movie'>
            <img src={movie.Poster} alt={movie.Title} />
            <span className='title'>{movie.Title}</span>
            <span className='year'>{movie.Year}</span>
            <div className='button' onClick={() => displayMovieInfo(movie)}>Display</div>
        </div>
    )
}

export default Movie