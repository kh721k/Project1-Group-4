import { useEffect, useState, React } from "react";
import axios from "axios";

// import PostList from "../Posts/PostList";

import "./ProfilePage.css";
import SinglePost from "../Posts/SinglePost";
import Like from "../Posts/Like";
import PostList from "../Posts/PostList";

/*
TODO:
Feed page = postlist without being user specific
*/

function ProfilePage() {
  const currUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  const url = `http://localhost:8080/post/${currUser.userId}`;

  useEffect(() => {
    getUser();
  }, [currUser]);

  const getUser = async () => {
    const response = await axios.get(
      `http://localhost:8080/user?username=${currUser.username}`,
      { withCredentials: true }
    );

    if (response.status !== 200) {
      alert("Couldn't get user!");
      console.log("Response: ", response);
    } else {
      setUser(response.data);
    }
  };

  // const getUserPosts = async () => {
  //   const response = await axios.get(
  //     `http://localhost:8080/post/${currUser.userId}`
  //   );

  //   if (response.status !== 200) {
  //     alert("Couldn't fetch user's posts");
  //     console.log("Reponase: ", response);
  //   } else {
  //     console.log("User's posts ", response.data);
  //     setUserPosts(response.data);
  //   }
  // };

  const updateUser = async () => {
    console.log("Button clicked");
  };

  // const [followers, getFollowers] = useState([])
  // const [following, getFollowing] = useState([])

  return (
    <div>
      <div className="profile-info-container">
        <div>
          <img
            id="profile-img"
            src="https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn"
            alt="spongebob"
          />
        </div>
        <div className="profile-info">
          <div className="profile-username">
            <span>{user?.username}</span>
            <button onClick={updateUser}>Edit profile</button>
          </div>

          <div className="profile-stats">
            <span>
              <b>123</b> posts
            </span>
            <span>
              <b>400</b> followers
            </span>
            <span>
              <b>899</b> following
            </span>
          </div>

          <div className="profile-name">
            <span>
              {user?.fname} {user?.lname}
            </span>
          </div>

          <div className="profile-bio">
            <span>{user?.bio}</span>
          </div>
        </div>
      </div>
      <div className="user-posts">
        <PostList url={url} />
      </div>
    </div>
  );
}

export default ProfilePage;
