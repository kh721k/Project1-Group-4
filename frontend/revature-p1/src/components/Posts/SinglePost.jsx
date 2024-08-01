import React, { useState, useEffect } from 'react'
import Like from './Like'

function SinglePost(){
    return(
        <>
        Single Post Here
        Comments Here
        <button>Create Comment</button>
        <Like post={post} user={user}/>
        </>
    )
}

export default SinglePost
