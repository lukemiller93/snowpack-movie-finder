import { useQuery } from "react-query"
const {SNOWPACK_PUBLIC_REACT_APP_TMDB_BASE_URL, SNOWPACK_PUBLIC_REACT_APP_TMDB_KEY} = import.meta.env
const getMovieById = async (movieId) => {
  const data = await fetch(`${SNOWPACK_PUBLIC_REACT_APP_TMDB_BASE_URL}/movie/${movieId}?api_key=${SNOWPACK_PUBLIC_REACT_APP_TMDB_KEY}`)
  return data.json()
}

export default function useMovie(movieId) {
  return useQuery(["movie", movieId], () => getMovieById(movieId))
}