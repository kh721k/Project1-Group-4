import React, { useState, useEffect } from "react";
import axios from "axios";

function EditPost({ post, user, fetchPosts, setIsEditingPost }) {
  const [content, setContent] = useState(post.content);
  console.log("content = ", content);

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const editPost = async () => {
    const postObj = {
      postId: post.postId,
      content: content,
      shares: post.shares,
      author: user,
    };
    const response = await axios.put(
      `http://localhost:8080/post/${post.postId}`,
      postObj,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    if (response.status !== 200) {
      alert("Couldn't create post!");
      console.log("Response: ", response);
    }

    console.log("Edited post!", response.data);
    fetchPosts();
    setIsEditingPost(false);
  };

  const deletePost = async () => {
    const response = await axios.delete(
      `http://localhost:8080/post/${post.postId}`
    );

    if (response.status !== 200) {
      alert("Couldn't delete post!");
      console.log("Response: ", response);
    }

    console.log("Delete post", response.data);
    fetchPosts();
  };

  return (
    <>
      <input
        type="text"
        id="content"
        onChange={changeContent}
        value={content}
      />
      <div></div>
      <button onClick={editPost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </>
  );
}

export default EditPost;
