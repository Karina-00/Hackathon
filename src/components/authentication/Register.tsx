import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Navigate, NavLink } from "react-router-dom";
import RegisterImage from '../../assets/laptop.png';

const Register = () => {
    const [isRedirect, setIsRedirect] = useState(false);

    const [userName, setUserName] = useState("");
    const [userSurname, setUserSurname] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userPass, setUserPass] = useState("");


    return (
        <>
            {isRedirect && <Navigate to="/"/>}
            <ToastContainer />
            <div className="row register-page">
                <div className="col-sm-6 register-form">
                    <h1>User Register</h1>
                    <form onSubmit={(e) => console.log(userName)}>
                        <div className="mb-3 inputs">
                            <input
                                onChange={(e) => setUserName(e.target.value)}
                                className="form-control"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-3 inputs">
                            <input
                                onChange={(e) => setUserSurname(e.target.value)}
                                className="form-control"
                                placeholder="Surname"
                            />
                        </div>
                        <div className="mb-3 inputs">
                            <input  type="text" pattern="\d*" maxLength={4}
                                    onChange={(e) => setUserPhone(e.target.value)}
                                    className="form-control"
                                    placeholder="Phone"
                            />
                        </div>
                        <div className="mb-3 inputs">
                            <input
                                onChange={(e) => setUserMail(e.target.value)}
                                className="form-control"
                                placeholder="Mail"
                            />
                        </div>
                        <div className="mb-3 inputs">
                            <input type='password'
                                   onChange={(e) => setUserPass(e.target.value)}
                                   className="form-control"
                                   placeholder="Password"
                            />
                        </div>
                        <button className="register-button">Submit</button>
                        <NavLink to="/" className="sign-up" style={{ float:'right' }}>Sign Up</NavLink>
                    </form>
                </div>
                <div className="col-sm-6 register-img">
                    <img src={RegisterImage} alt="laptop" className="register-image"></img>
                </div>
            </div>
        </>
    );
}

export default Register;