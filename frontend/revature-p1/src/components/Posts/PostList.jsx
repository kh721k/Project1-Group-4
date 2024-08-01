import React, { useState, useEffect } from "react";
import axios from "axios";

import "./PostList.css";
import SinglePost from "./SinglePost";
// import Post from "./Post";

const currUser = JSON.parse(localStorage.getItem("user"));

function PostList() {
  // TODO: get all posts from specific user

  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/posts`);
        setPosts(response.data);
        console.log("RESPONSE DATA: ", response.data);
        console.log(posts);
      } catch (error) {
        console.log(error);
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostUpdated = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.postId === updatedPost.postId ? updatedPost : post
      )
    );
  };

 

  // if (!posts.length) {
  //   return <div>No posts..</div>;
  // }

  return (
    <div className="Posts">
      {posts.map((post) => {
        return (
          <div key={post.postId} className="Post">
            <SinglePost post={post} user={currUser} />
          </div>
        );
      })}
    </div>
  );
}

export default PostList
