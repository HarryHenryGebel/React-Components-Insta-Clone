import React from "react";
import Post from "./Post";
import "./Posts.css";
import {requester} from 'easier-requests';

const Posts = (props) => {
  const {likePost, posts} = props;

  return (
    <div className="posts-container-wrapper">
      {posts.map((post) => <Post key = {requester.createUniqueID()}
                                 likePost = {likePost}
                                 post={post}/>)}
    </div>
  );
};

export default Posts;
