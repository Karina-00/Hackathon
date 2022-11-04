import React, { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import { Navigate, NavLink } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeName, changePassword} from "../../reducers/unLogUserSlice";



const Login = () => {
    const refEmail = useRef<HTMLInputElement>(null);
    const refPassword = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const username = useAppSelector((state) => state.unLogUserSlice.username);
    const password = useAppSelector((state) => state.unLogUserSlice.password);

    return (
        <>
            <ToastContainer/>
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                    <h1>User Login</h1>
                    <form onSubmit={(e) => console.log(username) }>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName1" className="form-label">Username</label>
                            <input ref={refEmail} onChange={(e) => dispatch(changeName(e.target.value))} type="name" className="form-control" id="exampleInputName1"  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input ref={refPassword} onChange={(e) => dispatch(changePassword(e.target.value))} type="password" className="form-control" id="exampleInputPassword1"  />
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                        <NavLink to="/register" className="btn btn-success" style={{ float:'right' }}
                                 onClick={()=>{
                                     dispatch(changePassword(''));
                                     dispatch(changeName(''));}}>Register
                        </NavLink>

                    </form>
                </div>
                <div className='col-sm-4'></div>
            </div>

        </>
    )

}

export default Login;