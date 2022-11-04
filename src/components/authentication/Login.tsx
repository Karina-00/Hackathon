import React, { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import { Navigate, NavLink } from "react-router-dom";



const Login = () => {
    const refEmail = useRef<HTMLInputElement>(null);
    const refPassword = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <ToastContainer/>
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                    <h1>User Login</h1>
                    <form onSubmit={(e) => console.log('jk') }>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                            <input ref={refEmail} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1"  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input ref={refPassword} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"  />
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                        <NavLink to="/register" className="btn btn-success" style={{ float:'right' }}>Register</NavLink>

                    </form>
                </div>
                <div className='col-sm-4'></div>
            </div>

        </>
    )

}

export default Login;