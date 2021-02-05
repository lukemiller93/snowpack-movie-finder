import React, { useState } from 'react';
import { Movie } from './components/Movie';
import { PopularMovies } from './components/PopularMovies';
import { Sidebar } from './components/Sidebar';

interface AppProps {}
function App({}: AppProps) {
  const [movieId, setMovieId] = useState(-1);

  // return the App component
  return (
    <div className="App">
      <Sidebar />
      {movieId > -1 ? (
        <Movie movieId={movieId} setMovieId={setMovieId} />
      ) : (
        <PopularMovies setMovieId={setMovieId} />
      )}
    </div>
  );
}

export default App;
