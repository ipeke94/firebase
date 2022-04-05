import React from "react";
import Post from "./Post";
import List from "./List";

import mappingItems from "../constants/Map";

const Posts = ({ posts }) => {
  const sortFunc = (itemArr) =>
    itemArr.sort((a, b) => {
      return a.value - b.value;
    });

  // const makeunique = (arr2) => {
  //   return [...new Map(arr2.map((item) => [JSON.stringify(item), item])).values()];
  // };

  const uniq = (newArray) => {
    return newArray.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
  };

  const mapFunc = (mappingItems) => {
    let arr = [];
    let arr2 = [];
    posts.forEach((post, i) => {
      if (post.title) {
        mappingItems.forEach((item) => {
          if (post.title.toLowerCase().trim().indexOf(item.key.trim()) > -1) {
            arr.push({ ...item, ...post });
          } else {
            arr2.push(Object.assign({ key: post.title, value: 1000 + i }, post));
          }
        });
      }
    });
    return sortFunc(uniq([...arr, ...arr2]));
  };

  return (
    <div className="post-max-container">
      <section className="posts-container">
        <div className="post-cards">
          {mapFunc(mappingItems).map((post) => (
            <Post {...post} key={post.id} />
          ))}
        </div>
        {/* <List /> */}
      </section>
    </div>
  );
};

export default Posts;
