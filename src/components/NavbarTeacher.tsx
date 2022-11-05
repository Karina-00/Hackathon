import React from "react";

type Props = {
    name:string; 
}

function NavbarTeacher({name}:Props){
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
                        <button className="btn btn-outline-success search-button" type="submit">Search</button>
                </form>
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Classes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Courses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{name}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Log Out</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}