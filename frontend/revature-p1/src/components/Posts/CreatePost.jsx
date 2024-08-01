import React, { useState, useEffect } from "react";
import axios from "axios";
// import Post from './Post';

function CreatePost() {
  const [content, setContent] = useState("");
  console.log("content = ", content);
  // const cookie = document.cookie
  // console.log("cookie = ", cookie)

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const createPost = async () => {
    const currUser = JSON.parse(localStorage.getItem("user"));
    const postObj = {
      postId: null,
      content: content,
      shares: 0,
      author: currUser,
    };
    const response = await axios.post(
      "http://localhost:8080/post",
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
      <input type="text" id="content" onChange={changeContent} />
      <div></div>
      <button onClick={createPost}>Submit new post</button>
    </>
  );
}

export default CreatePost;
