import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CreateComment() {
  const { postId } = useParams();

  const [content, setContent] = useState("");
  const [comment, setComment] = useState(null);
  const [post, setPost] = useState(null);
  console.log("content = ", content);
  // const cookie = document.cookie
  // console.log("cookie = ", cookie)

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const getPost = async () => {
    const response = await axios.get(`http://localhost:8080/post/${postId}`);
    if (response.status !== 200) {
      alert("Couldn't get post!");
      console.log("Response: ", response);
    } else {
      setPost(response.data);
    }
  };

  const createComment = async () => {
    const response = await axios.post(
      "http://localhost:8080/comment",
      // TODO: change author to session cookie
      { commentId: null, content: content, author: 1, post: post },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    if (response.status !== 200) {
      alert("Couldn't create comment!");
      console.log("Response: ", response);
    }
  };

  useEffect(() => {
    getPost();
  }, [postId]);

  return (
    <>
      <input type="text" id="content" onChange={changeContent} />
      <div></div>
      <button onClick={createComment}>Submit new comment</button>
    </>
  );
}

export default CreateComment;
