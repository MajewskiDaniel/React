import React from "react";
import star from "./star.svg";
// import {ReactComponent as Star} from '../star.svg

function Rating(props) {
  const stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(<img key={i} src={star} />);
  }
  return <span>{stars}</span>;
}

export default Rating;
