import { useEffect, useState, React } from "react";
import axios from "axios";

// import PostList from "../Posts/PostList";

import "./ProfilePage.css";

/*
TODO:
Feed page = postlist without being user specific
*/

function ProfilePage() {
  const username = JSON.parse(localStorage.getItem("user")).username;
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, [username]);

  const getUser = async () => {
    const response = await axios.get(
      `http://localhost:8080/user?username=${username}`,
      { withCredentials: true }
    );

    if (response.status !== 200) {
      alert("Couldn't get user!");
      console.log("Response: ", response);
    } else {
      setUser(response.data);
    }
  };

  // const [followers, getFollowers] = useState([])
  // const [following, getFollowing] = useState([])

  return (
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
          <button>Edit profile</button>
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
      {/* <PostList user={user}/> */}
    </div>
  );
}

export default ProfilePage;
