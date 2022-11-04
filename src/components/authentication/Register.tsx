import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Navigate, NavLink } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeEmail, changeName, changePassword, changeSurname} from "../../reducers/unLogUserSlice";

const Register = () => {
    const dispatch = useAppDispatch();
    const [isRedirect, setIsRedirect] = useState(false);

    const userName = useAppSelector((state) => state.unLogUserSlice.username);
    const password = useAppSelector((state) => state.unLogUserSlice.password);
    const userSurname = useAppSelector((state) => state.unLogUserSlice.surname);
    const userMail = useAppSelector((state) => state.unLogUserSlice.email);


    return (
        <>
            {isRedirect && <Navigate to="/"/>}
            <ToastContainer />
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h1>User Register</h1>
                    <form onSubmit={(e) => console.log(userName)}>
                        <div className="mb-3">
                            <input
                                onChange={(e) => dispatch(changeName(e.target.value))}
                                className="form-control"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                onChange={(e) => dispatch(changeSurname(e.target.value))}
                                className="form-control"
                                placeholder="Surname"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                onChange={(e) => dispatch(changeEmail(e.target.value))}
                                className="form-control"
                                placeholder="Mail"
                            />
                        </div>
                        <div className="mb-3">
                            <input type='password'
                                   onChange={(e) => dispatch(changePassword(e.target.value))}
                                   className="form-control"
                                   placeholder="Password"
                            />
                        </div>
                        <button className="btn btn-primary">Submit</button>
                        <NavLink to="/" className="btn btn-danger" style={{ float:'right' }}>Cancel</NavLink>
                    </form>
                </div>
                <div className="col-sm-4"></div>
            </div>
        </>
    );
}

export default Register;