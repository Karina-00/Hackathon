import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks";
import {changeIsLogin} from "../reducers/unLogUserSlice";
import {changeIsLoginD} from "../reducers/userSlice";

type Props = {
    cash:number; 
}

function Navbar({cash}:Props) {
    const dispatch = useAppDispatch();
    const [isRedirect, setIsRedirect] = useState(false);
    const loggedIn = useAppSelector((state) => state.userSlice.isLogin);
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <a className="navbar-brand logo" href="#">CHILLedu</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/shop" className="nav-link">Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/courses" className="nav-link">Courses</NavLink>
                        </li>
                        <li className="nav-item avatar-item" onClick={()=>setIsRedirect(true)}>
                            <img src='https://www.w3schools.com/howto/img_avatar.png' alt="userAvatar" className="user-avatar"></img>
                            <div className="dropdown-content">
                              <div className="square"></div>
                              <a href="#" className="dropdown-item di-top">Notifications</a>
                                <NavLink to="/profile" className="dropdown-item">My account</NavLink>
                                <NavLink to="/" className="dropdown-item" onClick={()=>{dispatch(changeIsLoginD(false))}}>Log out</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link cash">${cash}</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
