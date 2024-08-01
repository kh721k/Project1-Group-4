import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';

function Like({ post, user }) {
    const [userList, setUserList] = useState([])
    const [like, setLike] = useState(userList.some(u => u.id === user.id) || false)
    const [showLikeList, setShowLikeList] = useState(false)

    useEffect(() => {
      getLikes()
      setLike(userList.some(u => u.id === user.id))
    }, [post, user])

    const getLikes = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/posts/${post.postId}/likes`)
            setUserList(response.data)
        } catch (error) {
            alert("Couldn't find post likes!")
            console.log("Response: ", response)
        }
    }

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
        <div>
            {like ? (
                <button onClick={() => handleUnlike}>Unlike</button>
            ) : (
                <button onClick={() => handleLike}>Like</button>
            )}
            <span>{userList?.length} Likes</span>
            {showLikeList ? (
                <>
                    <button onClick={() => setShowLikeList(false)}>Hide</button>
                    {userList.map((user, i) => (
                        <div key={i}>{user.username}</div>
                    ))}
                </>
            ) : (
                <button onClick={() => setShowLikeList(false)}>Users</button>
            )}
        </div>
    )
}

export default Like
