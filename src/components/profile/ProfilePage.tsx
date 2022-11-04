import React from "react";
import "./profile_page.css";
import ProfilePicture from '../../assets/avatar_placeholder.png';

const ProfilePage = () => {
    return (
        <div className="ProfilePage">
            <div className="ImageCard">
                <img className="ProfilePicture" src={ProfilePicture} alt={"Avatar"}/>
            </div>
            <div className="PageContent">
                <h1>Username ($100) </h1>
                <h2>Awards</h2>
                <div className="ItemsList"> Awards content </div>
                <h2>Storage</h2>
                <div className="ItemsList">Storage content</div>
            </div>
        </div>
    )

}

export default ProfilePage;