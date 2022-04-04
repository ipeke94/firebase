import React from "react";
import Post from "./Post";
import AddPost from "./AddPost";

const Posts = ({ posts }) => {
  return (
    <div>
      <section className="posts-container">
        <AddPost />
        {posts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </section>
    </div>
  );
};

export default Posts;
