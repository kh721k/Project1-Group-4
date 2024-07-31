import { useEffect, useState, React } from "react";
// import PostList from "../Posts/PostList";

import "./ProfilePage.css";

/*
TODO:
Feed page = postlist without being user specific
*/

function ProfilePage({user}) {

    // const [followers, getFollowers] = useState([])
    // const [following, getFollowing] = useState([])



    return (
        <div className='profile-info-container'>
            <div>
                <img id="profile-img" src="https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn" alt="spongebob" />
            </div>
            <div className="profile-info">
                <div className="profile-username">
                    <span>bob_of_sponge</span>
                    <button>Edit profile</button>
                </div>
                <div className="profile-numbers">
                    <span> <b>123</b> posts</span>
                    <span><b>400</b> followers</span>
                    <span><b>899</b> following</span>
                </div>
                <div className="profile-name">
                    <span>Sponge Bob</span>
                </div>
            </div>
            {/* <PostList user={user}/> */}
        </div>
    )
}

export default ProfilePage;
