import React from "react";
import PostMovie from "./components/PostMovie";
import movies from "./movies.json";
import Rating from "./components/Rating";

const topMovies = movies.filter(movie => movie.rating > 6);
const worstMovies = movies.filter(movie => movie.rating <= 6);

function MoviesList(props) {
  return props.movies.map(movie => (
    <PostMovie
      key={movie.id}
      title={movie.title}
      poster={movie.poster}
      rating={movie.rating}
      description={movie.description}
    />
  ));
}

function App() {
  return (
    <div>
      <h2>TOP MOVIES</h2>
      <MoviesList movies={topMovies} />
      <h2>WORST MOVIES</h2>
      <MoviesList movies={worstMovies} />
    </div>
  );
}

export default App;
