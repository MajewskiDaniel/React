import React from "react";
import Rating from "./Rating";

function PostMovie(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img width="200" src={props.poster} />
      <p>
        Ocena:
        <Rating rating={props.rating} />
        /10
      </p>
      <p>{props.description}</p>
    </div>
  );
}

export default PostMovie;
