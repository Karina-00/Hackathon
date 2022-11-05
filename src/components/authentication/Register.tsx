import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Navigate, NavLink } from "react-router-dom";
import RegisterImage from '../../assets/laptop.png';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeEmail, changeIsLogin, changeName, changePassword, changeSurname} from "../../reducers/unLogUserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {changeIsLoginD} from "../../reducers/userSlice";

type Prop = {
    username: string;
    name?: string;
    surname?: string,
    email?: string,
    password: string,
}

const setUserApiAsync = createAsyncThunk(
    'Register',
    async ({username, password, name, email, surname}: Prop, { rejectWithValue , dispatch}) => {
        try {
            await fetch('https://chilledu-backend.herokuapp.com/api/children/registration', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: 'Olaaa',
                    name: 'Ola',
                    surname: 'JJ',
                    email: 'testt@gmail.com',
                    password: 'lol',
                    profile_pic: null,
                })
            }).then((response) => response.json())
                .then(()=>{
                    dispatch(changeIsLogin(true));
                    dispatch(changeIsLoginD(true));
                })
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);


const Register = () => {
    const dispatch = useAppDispatch();

    const userName = useAppSelector((state) => state.unLogUserSlice.username);
    const password = useAppSelector((state) => state.unLogUserSlice.password);
    const surname = useAppSelector((state) => state.unLogUserSlice.surname);
    const userMail = useAppSelector((state) => state.unLogUserSlice.email);
    const name = useAppSelector((state) => state.unLogUserSlice.name);


    return (
        <>
            <ToastContainer />
            <div className="row register-page">
                <div className="col-sm-6 register-form">
                    <h1>User Register</h1>
                    <form>
                        <div className="mb-3 inputs">
                            <input
                                onChange={(e) => dispatch(changeName(e.target.value))}
                                className="form-control"
                                placeholder="Username"
                            />
                        </div>
                        <div className="mb-3 inputs">
                            <input
                                onChange={(e) => dispatch(changeName(e.target.value))}
                                className="form-control"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-3 inputs">
                            <input
                                onChange={(e) => dispatch(changeSurname(e.target.value))}
                                className="form-control"
                                placeholder="Surname"
                            />
                        </div>
                        <div className="mb-3 inputs">
                            <input
                                onChange={(e) => dispatch(changeEmail(e.target.value))}
                                className="form-control"
                                placeholder="Mail"
                            />
                        </div>
                        <div className="mb-3 inputs">
                            <input type='password'
                                   onChange={(e) => dispatch(changePassword(e.target.value))}
                                   className="form-control"
                                   placeholder="Password"
                            />
                        </div>
                        <div className="file-uploader inputs">
                            <input type="file" className="form-control" />
                                </div>
                        </form>
                    <button className="register-button" onClick={()=> dispatch(setUserApiAsync({username: userName, password, name, email: userMail, surname }))}>Submit</button>
                    <NavLink to="/" className="sign-up" style={{ float:'right' }}>Cancel</NavLink>
                </div>
                <div className="col-sm-6 register-img">
                    <img src={RegisterImage} alt="laptop" className="register-image"></img>
                </div>
            </div>
        </>
    );
}

export default Register;