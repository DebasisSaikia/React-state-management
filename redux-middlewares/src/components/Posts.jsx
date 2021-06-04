import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchPosts } from "../state/actiions";

const Posts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const renderPosts = () => {
    if (state.loading) {
      <h1>Loading.....</h1>;
    }
    return state.items.map((post) => {
      return <h3 key={post.id}>{post.title}</h3>;
    });
  };
  return (
    <>
      <div>{renderPosts()}</div>
    </>
  );
};

export default Posts;
