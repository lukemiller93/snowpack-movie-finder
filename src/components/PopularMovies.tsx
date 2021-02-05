import styled from '@emotion/styled';
import React from 'react';
import { useQueryClient } from 'react-query';
import usePopularMovies from '../api/hooks/usePopularMovies';

const Styledsection = styled.section`
  padding: 4rem;
  background-color: #fefefe;

  h1 {
    text-align: left;
    letter-spacing: 0.5px;
    font-size: 2rem;
    text-transform: uppercase;
    font-family: 'Exo';
  }

  li {
    cursor: pointer;
    transition: transform 100ms ease-in-out;
    &:hover {
      transform: translate3d(0, -1rem, 1rem);
      transform: scale(1.21);
    }

    h5 {
      font-family: 'Rubik';
      text-align: center;
      letter-spacing: 1px;
    }
  }
`;

interface PopularMovies {
  setMovieId: (x: number) => void;
}
export const PopularMovies = ({ setMovieId }: PopularMovies) => {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePopularMovies();
  console.log(data);
  return (
    <Styledsection>
      <h1>Popular Movies</h1>
      {status === 'loading' ? (
        <p>Loading movies...</p>
      ) : status === 'error' ? (
        <span>Error: {error?.message}</span>
      ) : (
        <>
          <ul
            className="movie-list"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(10rem, 1fr))`,
              gap: `1rem`,
              listStyle: 'none',
            }}
          >
            {data?.results?.map((movie: any) => (
              <li
                className="movie-list__listing"
                key={movie.id}
                onClick={() => setMovieId(movie.id)}
              >
                <article>
                  <img
                    style={{ width: `100%`, borderRadius: `20px` }}
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="body">
                    <h5
                      style={
                        // We can use the queryCache here to show bold links for
                        // ones that are cached
                        queryClient.getQueryData(['movie', movie.id])
                          ? {
                              fontWeight: 'bold',
                              color: 'red',
                              margin: 0,
                            }
                          : { margin: 0 }
                      }
                    >
                      {movie.title}
                    </h5>
                    <small>Release Date: {movie.release_date}</small>
                    {/* <p>{movie.overview}</p> */}
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <div>{isFetching ? 'Background updating...' : ' '}</div>
        </>
      )}
    </Styledsection>
  );
};
