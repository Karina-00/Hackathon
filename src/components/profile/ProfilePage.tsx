import React, {useState} from "react";
import "./profile_page.css";
import LoginImage from '../../assets/loginImg.png';
import {useAppSelector} from "../../hooks"; 
import Item from './item'
import AwardItem1 from '../../assets/awarditem1.jpeg'
import AwardItem2 from '../../assets/awarditem2.jpeg'
import {createAsyncThunk} from "@reduxjs/toolkit";
import { changeUser } from "../../reducers/userSlice";


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

    const [isAwardsActive, setAwardsIsActive] = useState(true);

    function AwardSwitch(){
      setAwardsIsActive(true);
      setStorageIsActive(false);
    }

    const [isStorageActive, setStorageIsActive] = useState(false);

    function StorageSwitch(){
      setStorageIsActive(true);
      setAwardsIsActive(false)
    }

    return (
       <div className="ProfilePage">
         <div className="UserSide">
           <h1 className="ProfileHeader">Profile</h1>
           <img src={LoginImage} alt="user-avatar" className="avatar"></img>
           <h2 className="UserName">{username}</h2>
         </div>
         <div className="AwardsSide">
            <div className="switch">
              <button className="switchButton AwardSwitch" onClick={AwardSwitch} style = {{backgroundColor: isAwardsActive ? 'hsl(107, 51%, 87%)': 'hsl(109, 8%, 51%)'}}>Awards</button>
              <button className="switchButton StorageSwitch" onClick={StorageSwitch} style={{backgroundColor: isStorageActive ? 'hsl(107, 51%, 87%)': 'hsl(109, 8%, 51%)'}}>Storage</button>
            </div>
            <div className="itemList">
               <Item
                 itemImage={AwardItem1}
               />
               <Item
                 itemImage={AwardItem2}
               />
            </div>
         </div>
       </div>
    )

}

export default ProfilePage;