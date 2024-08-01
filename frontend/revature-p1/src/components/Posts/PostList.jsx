import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

function PostList() {
    // TODO: get all posts from specific user

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.getPosts();
                setPosts(response.data);
            }catch(error){
                console.log(error);
                console.error('Error fetching posts:', error);
            }
        }

    fetchPosts();
  }, []);

    const handlePostUpdated = (updatedPost) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.postId === updatedPost.postId ? updatedPost : post
            )
        );
    }

    if(!posts.length){
        return <div>No posts..</div>
    }

    return (
    <div>
      {posts.map((post) => (
        <Post key={post.postId} post={post} />
      ))}
    </div>
  );
}

export default PostList
