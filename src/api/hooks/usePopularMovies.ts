import { useQuery } from 'react-query';
const {
  SNOWPACK_PUBLIC_REACT_APP_TMDB_BASE_URL,
  SNOWPACK_PUBLIC_REACT_APP_TMDB_KEY,
} = import.meta.env;

type Results = {
  results: object;
};
interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  genre_ids: number[];
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export type QueryResponse = {
  data: any;
  results: any;
  backdrop_path: any;
};
const getPopularMovies = async (): Promise<QueryResponse> => {
  const res = await fetch(
    `${SNOWPACK_PUBLIC_REACT_APP_TMDB_BASE_URL}/movie/popular?api_key=${SNOWPACK_PUBLIC_REACT_APP_TMDB_KEY}`,
  );
  const data = await res.json();
  return data;
};

export default function usePopularMovies() {
  return useQuery<QueryResponse, Error>('popularMovies', getPopularMovies);
}
