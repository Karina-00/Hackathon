import React, {useEffect, useState} from "react";
import "./profile_page.css";
import Item from './item'
import StorageItem1 from '../../assets/PeopleSkins/BlueShirt.png'
import AwardItem1 from '../../assets/PeopleSkins/GreenShirt.png'
import AwardItem2 from '../../assets/PeopleSkins/GreySuit.png'
import AwardItem3 from '../../assets/trophy.png'
import {createAsyncThunk} from "@reduxjs/toolkit";
import { changeUser } from "../../reducers/userSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Container} from "nes-react";
import MoneyIcon from '../../assets/money.png'

import ProfilePicture from '../../assets/PeopleAvatars/WhiteShortBlond.png';


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
    const cash = useAppSelector((state) => state.userSlice.username);

    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(getUserApiAsync(1)); 
    }, []); 
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
           <img src={ProfilePicture} alt="user-avatar" className="avatar"></img>
           <h2 className="UserName">{username}</h2>
           <Container rounded>Lvl 22</Container>
           <Container rounded>
            <img src={MoneyIcon} className="moneyIcon"></img>450</Container>
         </div>
         <div className="AwardsSide">
            <div className="switch">
              <button className="switchButton AwardSwitch" onClick={AwardSwitch} style = {{backgroundColor: isAwardsActive ? 'hsl(107, 51%, 87%)': 'hsl(109, 8%, 51%)'}}>Awards</button>
              <button className="switchButton StorageSwitch" onClick={StorageSwitch} style={{backgroundColor: isStorageActive ? 'hsl(107, 51%, 87%)': 'hsl(109, 8%, 51%)'}}>Storage</button>
            </div>
            <div className="itemList">
              {isAwardsActive ? 
              <>
              <Item itemImage={AwardItem1}/>
              <Item itemImage={AwardItem2}/>
              <Item itemImage={AwardItem3}/>
              </> :
              <Item itemImage={StorageItem1}/>
              }
            </div>
         </div>
       </div>
    )

}

export default ProfilePage;