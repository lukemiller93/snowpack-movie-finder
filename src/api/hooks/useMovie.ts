import { useQuery } from 'react-query';
import type { QueryResponse } from './usePopularMovies';
const {
  SNOWPACK_PUBLIC_REACT_APP_TMDB_BASE_URL,
  SNOWPACK_PUBLIC_REACT_APP_TMDB_KEY,
} = import.meta.env;
const getMovieById = async (movieId: number): Promise<QueryResponse> => {
  const data = await fetch(
    `${SNOWPACK_PUBLIC_REACT_APP_TMDB_BASE_URL}/movie/${movieId}?api_key=${SNOWPACK_PUBLIC_REACT_APP_TMDB_KEY}&append_to_response=videos`,
  );
  return data.json();
};

export default function useMovie(movieId: number) {
  return useQuery<QueryResponse, Error>(['movie', movieId], () =>
    getMovieById(movieId),
  );
}
