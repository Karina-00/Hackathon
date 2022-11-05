import React from "react";
import "./shop.css";
import {NavLink} from "react-router-dom";



const ShopPage = () => {
    const itemTypes = ['Hat', 'Necklaces', 'Earrings']
    return (
        <>
            <div className="listProduct">
            <div className="sidenav">
                <a href="#Clothes" className="sticky">Clothes</a>
                <a href="#services">Accessories</a>
                <a href="#clients">Other</a>
            </div>
            <ul className="listProduct">{ itemTypes.map((item)=>(
                <div className="product-card">
                <div className="badge">Hot</div>
                <div className="product-tumb">
                    <img src="src/assets/item3.jpeg" alt=""/>
                </div>
                <div className="product-details">
                    <span className="product-catagory">Clothes</span>
                    <h4><a href="">{item}</a></h4>
                    <div className="product-bottom-details">
                        <div className="product-price">$230.99</div>
                        <div className="product-links">
                            <a href=""><i className="fa fa-heart"></i></a>
                            <a href=""><i className="fa fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>))}
            </ul>
            </div>
        </>
    )

}

export default ShopPage;