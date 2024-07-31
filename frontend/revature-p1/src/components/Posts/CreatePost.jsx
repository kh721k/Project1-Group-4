import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Post from './Post';


function CreatePost() {
    // interface Post { postId: number; content: string; shares: number; author: any }
    // const [postId, setPostId] = useState("");

    const content = document.getElementById('content');
    const cookie = document.cookie
    console.log("cookie = ", cookie)

    const createPost = async () => {
        const response = await axios.post(
            "http://localhost:8080/post",
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
                // data: { postId: null, content: content.value, shares: 0, author: null }
            }
        )
        if (response.status !== 200) {
            alert("Couldn't create post!")
            console.log("Response: ", response)
        }
    }

    return (
        <>
            <textarea id="content"/>
            <div></div>
            <button onClick={createPost()} >Submit new post</button>
        </>
    )
}

export default CreatePost;
