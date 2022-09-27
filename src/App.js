import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Movie from './components/Movie';
import MovieInfo from './components/MovieInfo';
import './App.css';

export const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [movieDisplayed, setMovieDisplayed] = useState(null)

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`
    const response = await fetch(url);
    const data = await response.json();

    if (data.Search)
      setMovies(data.Search)
  }

  useEffect(() => {
    getMovies();
  }, [searchValue])

  return (
    <div className='app'>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      {movieDisplayed && <MovieInfo movie={movieDisplayed} />}
      <div className='movieList'>
        {
          movies?.length ?
          movies.map((movie, index) =>
            <Movie movie={movie} key={index} setMovieDisplayed={setMovieDisplayed} />
          ) : "No Movies Found"
        }
      </div>
    </div>
  )
}

export default App;
