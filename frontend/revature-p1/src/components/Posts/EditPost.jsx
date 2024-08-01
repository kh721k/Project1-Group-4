import React, { useState, useEffect } from "react";
import axios from "axios";

function EditPost({ post }) {
  const [content, setContent] = useState(post.content);
  console.log("content = ", content);

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const editPost = async () => {
    const currUser = JSON.parse(localStorage.getItem("user"));
    const postObj = {
      postId: post.postId,
      content: content,
      shares: post.shares,
      author: currUser,
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

    console.log("Created post!", response.data);
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
    </>
  );
}

export default EditPost;
