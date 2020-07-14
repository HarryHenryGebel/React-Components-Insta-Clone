import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "./../../dummy-data";

const PostsPage = () => {
  const [postList, setPostList] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {postList.map((post, key) => <Post key = {key} post = {post} />)}
    </div>
  );
};

export default PostsPage;

//  LocalWords:  dummyData
