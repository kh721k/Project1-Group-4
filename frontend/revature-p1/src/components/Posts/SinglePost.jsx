import React, { useState, useEffect } from "react";
import Like from "./Like";
import EditPost from "./EditPost";

function SinglePost({ post, user }) {
  const [isEditingPost, setIsEditingPost] = useState(false);

  const editPost = () => {
    setIsEditingPost(true);
  };

  return (
    <>
      <div>
        {post.postId} | {post.content}
      </div>
      {/* <button onClick={editPost}>Edit Post</button> */}
      {!isEditingPost ? (
        <button onClick={editPost} key={post.postId}>
          Edit Post
        </button>
      ) : (
        <EditPost post={post}/>
      )}
      <button>Create Comment</button>
      <Like post={post} user={user} />
    </>
  );
}

export default SinglePost;
