import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';

function Like({ post, user }) {
    const [userList, setUserList] = useState([])
    const [like, setLike] = useState(false)
    const [showLikeList, setShowLikeList] = useState(false)

    useEffect(() => {
      getLikes()
    }, [post, user])

    // see if current like exists -> if it does, setLike(true)
    const getLikes = async () => {
        const response = await axios.get(
            `http://localhost:8080/posts/${post.postId}/likes`,
            { withCredentials: true }
        )
        if (response.status !== 200) {
            alert("Couldn't find post likes!")
            console.log("Response: ", response)
        } else {
            setUserList(response.data)
        }
    }

    // getSingleLike
        // check if user is in getLikes list
        // setLike(true)

    const handleLike = async (e) => {
        e.preventDefault()
        const response = await axios.post(
            `http://localhost:8080/posts/${post.postId}/${user.userId}`,
            { headers: { "Content-Type": "application/json" } }
        )
        if (response.status == 200) setLike(true)
    }

    const handleUnlike = async (e) => {
        e.preventDefault()
        const response = await axios.delete(
            `http://localhost:8080/posts/${post.postId}/${user.userId}`,
            { headers: { "Content-Type": "application/json" } }
        )
        if (response.status == 200) setLike(false)
    }

    return (
        <>
            {like ? (
                <button onClick={() => handleUnlike}>Unlike</button>
            ) : (
                <button onClick={() => handleLike}>Like</button>
            )}
            <span>{}</span>
        </>
    )
}

export default Like
