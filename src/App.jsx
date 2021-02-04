import React, { useState } from 'react'
import './App.css'
import { Movie } from './components/Movie'
import { PopularMovies } from './components/PopularMovies'
function App() {
  const [movieId, setMovieId] = useState(-1)

  // return the App component
  return (
    <div className="App">
   {movieId > -1 ? (
        <Movie movieId={movieId} setMovieId={setMovieId} />
      ) :
      <PopularMovies setMovieId={setMovieId} />}
    </div>
  )
}

export default App
