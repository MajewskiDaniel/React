import React from "react";
import CategoryForm from "./components/CategoryForm/CategoryForm";
import PostForm from "./components/PostForm/PostForm";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../actions/categories";

export default function () {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/">[Back to blog]</Link>
      <h2>Admin</h2>
      <h4>Create Categories</h4>
      <CategoryForm
        onSubmit={({ name }) => {
          dispatch(addCategory(name));
        }}
      />
      <h4>Create Post</h4>
      <PostForm
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      />
    </div>
  );
}
