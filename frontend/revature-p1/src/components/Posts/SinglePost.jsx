import React, { useState, useEffect } from "react";

function SinglePost({ post }) {
  const [isEditing, setIsEditing] = useState(false);

  const editPost = () => {
    setIsEditing(true);
  };

  return (
    <>
      {/* TODO: local state HERE */}
      <div>
        {post.postId} | {post.content}
      </div>
      {/* <button onClick={editPost}>Edit Post</button> */}
      {!isEditing ? (
        <button onClick={editPost} key={post.postId}>
          Edit Post
        </button>
      ) : (
        <input type="text"></input>
      )}
      Single Post Here Comments Here
      <button>Create Comment</button>
    </>
  );
}

export default SinglePost;
