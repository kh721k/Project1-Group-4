import React, { useState, useEffect } from "react";
import axios from "axios";
// import Post from "./Post";

function PostList() {
  // TODO: get all posts from specific user

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const currUser = JSON.parse(localStorage.getItem("user"));
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

  // const handlePostUpdated = (updatedPost) => {
  // setPosts((prevPosts) =>
  //   prevPosts.map((post) =>
  //     post.postId === updatedPost.postId ? updatedPost : post
  //   )
  // );
  // };

  // if (!posts.length) {
  //   return <div>No posts..</div>;
  // }

  return (
    <div className="Posts">
      {posts.map((post, index) => {
        return (
          <div key={index}>
            {post.postId} | {post.content}
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
