import React, { useState, useEffect } from "react";
import Like from "./Like";
import EditPost from "./EditPost";

function SinglePost({ post, user, fetchPosts }) {
  const [isEditingPost, setIsEditingPost] = useState(false);

  const editPost = () => {
    setIsEditingPost(true);
  };

  return (
    <>
      <div>
        {post.postId} | {post.content}
        <button>Create Comment</button>
        <Like post={post} user={user} />
      </div>
      {!isEditingPost ? (
        <button onClick={editPost} key={post.postId}>
          Edit Post
        </button>
      ) : (
        <EditPost post={post} user={user} fetchPosts={fetchPosts} setIsEditingPost={setIsEditingPost}/>
      )}
    </>
  );
}

export default SinglePost;
