import React, { useState, useEffect } from "react";
import axios from "axios";

import "./PostList.css";
import SinglePost from "./SinglePost";

const currUser = JSON.parse(localStorage.getItem("user"));

function PostList({url}) {
  // TODO: get all posts from specific user

  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPost] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(url);
      setPosts(response.data);
      console.log("RESPONSE DATA: ", response.data);
      console.log(posts);
    } catch (error) {
      console.log(error);
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // const handlePostUpdated = (updatedPost) => {
  //   setPosts((prevPosts) =>
  //     prevPosts.map((post) =>
  //       post.postId === updatedPost.postId ? updatedPost : post
  //     )
  //   );
  // };

  // if (!posts.length) {
  //   return <div>No posts...</div>;
  // }

  return (
    <div className="Posts">
      {posts.map((post) => {
        return (
          <div key={post.postId} className="Post">
            <SinglePost post={post} user={currUser} fetchPosts={fetchPosts} />
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
