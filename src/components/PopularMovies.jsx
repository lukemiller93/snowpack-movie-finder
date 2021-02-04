import styled from "@emotion/styled";
import React from "react";
import { useQueryClient } from "react-query";
import usePopularMovies from "../api/hooks/usePopularMovies";

const Styledsection = styled.section`
  padding: 4rem;
  background-color: #222526;

  h1 {
    font-size: 4rem;
    text-transform: uppercase;
  }

  li {
    cursor: pointer;
    &:hover {
      transform: translate3d(0, -1rem, 1rem);
      transform: scale(1.21);
    }
  }
`;
export const PopularMovies = ({ setMovieId }) => {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePopularMovies();

  return (
    <Styledsection>
      <h1>Popular Movies</h1>
      {status === "loading" ? (
        <p>Loading movies...</p>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <ul
            className="movie-list"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fit, minmax(10rem, 1fr))`,
              gap: `1rem`,
              listStyle: "none",
            }}
          >
            {data?.results?.map((movie) => (
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
                        queryClient.getQueryData(["movie", movie.id])
                          ? {
                              fontWeight: "bold",
                              color: "red",
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
          <div>{isFetching ? "Background updating..." : " "}</div>
        </>
      )}
    </Styledsection>
  );
};
