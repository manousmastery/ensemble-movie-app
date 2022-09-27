import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import './App.css';

export const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=69a58fca`
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
      <div className='movieList'>
        {
          movies.map((movie, index) =>
            <div className='movie' key={index}>
              <img src={movie.Poster} alt={movie.Title} />
              <span className='title'>{movie.Title}</span>
              <span className='year'>{movie.Year}</span>
            </div>)
        }
      </div>
    </div>
  )
}

export default App;
