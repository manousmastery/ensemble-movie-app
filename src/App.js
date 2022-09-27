import React, { useState } from 'react'
import './App.css';

export const App = () => {
  const [movies, setMovies] = useState([{
    "Title": "Bullet Train",
    "Year": "2022",
    "imdbID": "tt12593682",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Bullet to the Head",
    "Year": "2012",
    "imdbID": "tt1308729",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4NzUyMjk2NV5BMl5BanBnXkFtZTcwOTUxNDc5OA@@._V1_SX300.jpg"
  },
  {
    "Title": "Silver Bullet",
    "Year": "1985",
    "imdbID": "tt0090021",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjYyZTM5MjEtNzhhYS00MTZlLTk5NzYtMTk4OTJhY2EzN2VkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    "Title": "Bullet in the Head",
    "Year": "1990",
    "imdbID": "tt0099426",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWJiMjNhMGEtYjRiMC00ZWIwLThiNTYtNTNhN2UyOTZkYmNmL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Bullet Head",
    "Year": "2017",
    "imdbID": "tt6204340",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDY4ODA1ZDEtYzljMy00Y2YzLTg1MDMtZjUyYmFkMWM2ZjdkXkEyXkFqcGdeQXVyNDA4OTExNDU@._V1_SX300.jpg"
  },
  {
    "Title": "Riding the Bullet",
    "Year": "2004",
    "imdbID": "tt0355954",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZThjZTgyYmYtZDUyYi00MzZjLTg3MTgtODM2YzJjOTIyZDk2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    "Title": "Lost Bullet",
    "Year": "2020",
    "imdbID": "tt10456740",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2M5MzE4NTMtMDNmOC00ZDQyLTkwYjUtZWY5ZDQ1MjYwNDZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    "Title": "Bullet",
    "Year": "1996",
    "imdbID": "tt0115781",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2RiMDYyNDQtZWI4Mi00NzYyLTg4MjAtNTFhODgyZGI3ZjdlXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Bite the Bullet",
    "Year": "1975",
    "imdbID": "tt0072705",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmU3NGQ0OTktN2RmMS00ZjllLWJlOTktYzI3MDcwMjQxNTc3XkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg"
  },
  {
    "Title": "A Bullet for the General",
    "Year": "1967",
    "imdbID": "tt0061429",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWM4ZDc3ZDItYjRlNC00MDE5LWIwNDctNTExZWYwNTFiNDZkXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
  }])
  return (
    <div>
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
