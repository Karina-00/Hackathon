import React from "react";
import "./profile_page.css";
import LoginImage from '../../assets/loginImg.png'; 
import {useAppDispatch, useAppSelector} from "../../hooks";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {changeIsLogin} from "../../reducers/unLogUserSlice";
import {changeIsLoginD, changeUser} from "../../reducers/userSlice";
import {toast} from "react-toastify";
import dark = toast.dark;


const getUserApiAsync = createAsyncThunk(
    'ProfilePage',
    async (id:number, { rejectWithValue , dispatch}) => {
        try {
            await fetch(`https://chilledu-backend.herokuapp.com/api/children/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) =>
                response.json()
            ).then(data=>
                dispatch(changeUser(data)));
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);


const ProfilePage = () => {
    const username = useAppSelector((state) => state.userSlice.username);
    const dispatch = useAppDispatch();
    return (
       <div className="ProfilePage">
         <div className="UserSide">
           <h1 className="ProfileHeader">Profile</h1>
           <img src={LoginImage} alt="user-avatar" className="avatar"></img>
           <h2 className="UserName">{username}</h2>
         </div>
         <div className="AwardsSide">
            <div className="switch">
              <button className="switchButton" onClick={()=> dispatch(getUserApiAsync(1))}
                >Awards</button>
              <button className="switchButton">Storage</button>
            </div>
         </div>
       </div>
    )

}

export default ProfilePage;