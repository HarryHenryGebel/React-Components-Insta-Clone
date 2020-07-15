import React, {useState} from "react";
import Posts from "./components/Posts/Posts";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(dummyData);
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const likePost = postId => {
    setPosts(posts.map(
      (post) => {
        if (post.id === postId)
          return {...post, likes: post.likes + 1};
        else
          return post;
      }));
  };

  return (
    <div className="App">
      <SearchBar />
      <Posts likePost = {likePost} posts = {posts}/>
    </div>
  );
};

export default App;
