import React from "react";
import PostList from "../Posts/PostList";

function FeedPage() {
  const url = "http://localhost:8080/posts"

  return (
    <>
      <PostList url={url} />
    </>
  );
}

export default FeedPage;
