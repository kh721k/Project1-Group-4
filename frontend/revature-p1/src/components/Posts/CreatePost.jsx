import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Post from './Post';


function CreatePost() {

    const [content, setContent] = useState('')
    console.log("content = ", content)
    // const cookie = document.cookie
    // console.log("cookie = ", cookie)

    const changeContent = (e) => {
        setContent(e.target.value)
    }

    const createPost = async () => {
        const response = await axios.post(
            "http://localhost:8080/post",
            // TODO: change postId to session cookie
            { postId: null, content: content, shares: 0, author: 1 },
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            }
        )
        if (response.status !== 200) {
            alert("Couldn't create post!")
            console.log("Response: ", response)
        }
    }

    return (
        <>
            <input type="text" id="content" onChange={changeContent}/>
            <div></div>
            <button onClick={createPost}>Submit new post</button>
        </>
    )
}

export default CreatePost;
