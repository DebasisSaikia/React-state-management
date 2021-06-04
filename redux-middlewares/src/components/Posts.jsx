import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchPosts } from "../state/actiions";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <>
      <div>
        {posts.map((post) => {
          return <h3 key={post.id}>{post.title}</h3>;
        })}
      </div>
    </>
  );
};

export default Posts;
