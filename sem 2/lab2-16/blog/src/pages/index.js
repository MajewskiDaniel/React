import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const categortiesNamesSelector = (state) =>
  state.categories.reduce((acc, cur) => {
    acc[cur.id] = cur.name;
    return acc;
  }, {});

export default function () {
  const posts = useSelector((state) => state.posts);
  const categoriesNames = useSelector(categortiesNamesSelector);

  return (
    <div>
      <Link to="/admin">[admin</Link>

      <h2>Posts</h2>
      {posts.map((post) => (
        <div kay={post.id}>
          <h3>{post.title}</h3>
          <div>
            Category: <strong>{categoriesNames[post.categoryId]}</strong>
          </div>
          <p>{posts.content}</p>
        </div>
      ))}
    </div>
  );
}
