import React from "react";
import "./profile_page.css";
import ProfilePicture from '../../assets/avatar_placeholder.png';
import LoginImage from '../../assets/loginImg.png'; 
import {useAppSelector} from "../../hooks"; 


const ProfilePage = () => {
    const username = useAppSelector((state) => state.userSlice.username);
    return (
       <div className="ProfilePage">
         <div className="UserSide">
           <h1 className="ProfileHeader">Profile</h1>
           <img src={LoginImage} alt="user-avatar" className="avatar"></img>
           <h2 className="UserName">{username}</h2>
         </div>
         <div className="AwardsSide">
            
         </div>
       </div>
    )

}

export default ProfilePage;