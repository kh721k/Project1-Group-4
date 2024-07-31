// import React, { useState } from 'react'

// function Post({post, postUpdated, postDeleted, postShared}) {
//   const [isEditing, setIsEditing] = useState(false)
//   const [content, setContent] = useState(post.content)


//   //need to set up api connection

//   const handleEdit = async () => {
//     const updatedPost = {...post, content}
//     await editPost(post.postId, updatedPost)
//     postUpdated(updatedPost)
//     setIsEditing(false)
//   }

//   const handleChange = (event) => {
//     setContent(event.target.value)
//   }

//   const handleDelete = async () => {
//     await deletePost(post.postId)
//     postDeleted(post.postId)
//   }

//   const handleShare = async () => {
//     await sharePost(post.postId, post.user.userId)
//     postShared(post.postId)
//   }

//   return (
//     <div className='post'>
//       isEditing ? (
//         <input type="text" value={content} onChange={handleChange}/>
//         <button onClick={handleEdit}>Save</button>
//       ):(
//         <div>
//           <h1>{post.content}</h1>
//           <p>Shared by: {post.user.username}</p>
//           <p>Likes: {post.likes}</p>
//           <p>Shares: {post.shares}</p>
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//           <button onClick={handleShare}>Share</button>
//           <button onClick={handleDelete}>Delete</button>
//         </div>
//       )
//     </div>
//   )
// }



// export default Post
