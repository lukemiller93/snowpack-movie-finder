import { useQuery } from "react-query"
const {SNOWPACK_PUBLIC_REACT_APP_TMDB_BASE_URL, SNOWPACK_PUBLIC_REACT_APP_TMDB_KEY} = import.meta.env
const getPopularMovies = async () => {
  const res = await fetch(`${SNOWPACK_PUBLIC_REACT_APP_TMDB_BASE_URL}/movie/popular?api_key=${SNOWPACK_PUBLIC_REACT_APP_TMDB_KEY}`)
  const data = await res.json()
  return data
}

export default function usePopularMovies() {
  return useQuery("popularMovies", getPopularMovies)
}