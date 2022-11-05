import React, { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import { Navigate, NavLink } from "react-router-dom";
import LoginPicture from '../../assets/loginImg.png'; 



const Login = () => {
    const refEmail = useRef<HTMLInputElement>(null);
    const refPassword = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <ToastContainer/>
            <div className='row login-page'>
                <div className='col-sm-6 login-img'>
                    <img src={LoginPicture} className="loginImg" alt="people-at-work"></img>
                </div>
                <div className='col-sm-6 login-form'>
                    <h1>Login to your account</h1>
                    <form onSubmit={(e) => console.log('jk') }>
                        <div className="inputs">
                            <input ref={refEmail} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1"  placeholder="Email adress"/>
                        </div>
                        <div className="inputs">
                            <input ref={refPassword} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="inputs">
                         <button type="submit" className="login-button">Login</button>
                         <NavLink to="/register" className="create-account" style={{ float:'right' }}>Create an account</NavLink>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )

}

export default Login;