import React from 'react';
import { AiFillAccountBook } from 'react-icons/ai';
import useMovie from '../api/hooks/useMovie';

interface Movie {
  movieId: number;
  setMovieId: (x: number) => void;
}
export const Movie = ({ movieId, setMovieId }: Movie) => {
  const { status, data, error, isFetching } = useMovie(movieId);

  return (
    <article>
      <div>
        <a href="#" onClick={() => setMovieId(-1)}>
          Back <AiFillAccountBook />
        </a>
      </div>
      {!movieId || status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error?.message}</span>
      ) : (
        <>
          <img
            src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
            alt=""
            style={{ width: `100%` }}
          />
        </>
      )}
    </article>
  );
};
