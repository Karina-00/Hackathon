import React from "react";
import "./shop.css";
import {NavLink} from "react-router-dom";



const ShopPage = () => {
    const courseTypes = ['Hat', 'Necklaces', 'Earrings']
    return (
        <>
            <div className="sidenav">
                <a href="#Clothes" className="sticky">Clothes</a>
                <a href="#services">Accessories</a>
                <a href="#clients">Other</a>
            </div>
        </>
    )

}

export default ShopPage;