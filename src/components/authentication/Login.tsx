import React, { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import { Navigate, NavLink } from "react-router-dom";
import LoginPicture from '../../assets/loginImg.png'; 
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeIsLogin, changeName, changePassword} from "../../reducers/unLogUserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {changeIsLoginD} from "../../reducers/userSlice";

type Prop = {
    username: string;
    password: string;
}

const getLoginUserApiAsync = createAsyncThunk(
    'Login',
    async ({username, password}: Prop, { rejectWithValue , dispatch}) => {
        try {
            await fetch('https://chilledu-backend.herokuapp.com/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: 'Patryczek',
                    password: 'test',
                })
            }).then((response) => response.json())
                .then((data)=>{
                    dispatch(changeIsLogin(data.id));
                    dispatch(changeIsLogin(true));
                    dispatch(changeIsLoginD(true));
                })
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);


const Login = () => {
    const refEmail = useRef<HTMLInputElement>(null);
    const refPassword = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const loggedIn = useAppSelector((state) => state.userSlice.isLogin);
    const username = useAppSelector((state) => state.unLogUserSlice.username);
    const password = useAppSelector((state) => state.unLogUserSlice.password);

    return (
        <>
            <ToastContainer/>
            <div className='row login-page'>
                <div className='col-sm-6 login-img'>
                <img src={LoginPicture} className="loginImg" alt="people-at-work"></img>
                </div>
                <div className='col-sm-6 login-form'>
                    <h1>Login to your account</h1>
                    <form>
                        <div className="inputs">
                            <input ref={refEmail} onChange={(e) => dispatch(changeName(e.target.value))} type="name" className="form-control" id="exampleInputName1"  placeholder="Username"/>
                        </div>
                        <div className="inputs">
                            <input ref={refPassword} onChange={(e) => dispatch(changePassword(e.target.value))} type="password" className="form-control" id="exampleInputPassword1"  placeholder="Password"/>
                        </div>
                    </form>
                    <button className="login-button" onClick={()=> dispatch(getLoginUserApiAsync({username, password}))}>Login</button>
                    <NavLink to="/register" className="create-account" style={{ float:'right' }}
                             onClick={()=>{
                                 dispatch(changePassword(''));
                                 dispatch(changeName(''));}}>Register
                    </NavLink>
                </div>
            </div>

        </>
    )

}

export default Login;