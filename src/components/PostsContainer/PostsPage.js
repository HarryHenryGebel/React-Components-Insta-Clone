import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "./../../dummy-data";
import {requester} from "easier-requests";

const PostsPage = () => {
  const [postList, setPostList] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {postList.map((post, key) => <Post
                                     key = {requester.createUniqueID()}
                                     post = {post} />)}
    </div>
  );
};

export default PostsPage;

//  LocalWords:  dummyData
