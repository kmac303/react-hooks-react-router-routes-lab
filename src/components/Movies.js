import { render } from "@testing-library/react";
import React from "react";
import { movies } from "../data";

function Movies() {
  const renderMovies = movies.map((movie) => (
  <div key={movie.title}>
    <h2>
      {movie.title}
    </h2>
    <p> 
      {movie.time} Minutes
    </p>
    <ul>Genre:
        {movie.genres.map((genre) => 
        <li key={genre}>
          {genre}
        </li>)}
    </ul>
    </div>
  )); 
  // const time = movies.map((movie) => 
  // <div key={movie.id}>{movie.time}</div>)
  // const time = movies.map((movie) => 
  // <div>{movie.time}</div>)
  return <div>
    <h1>
      Movies Page
    </h1>
    {renderMovies}
    </div>;
}

export default Movies;
