import React from "react";
import "./shop.css";
import HatImage from '../../assets/PeopleSkins/YellowShirt.png';
import SuitImage from '../../assets/PeopleSkins/GreySuit.png';
import ShirtImage from '../../assets/PeopleSkins/BlueShirt.png';


const ShopPage = () => {
    const itemTypes = [{name:'Blue Shirt', imag: ShirtImage, cost: 1000}, {name:'Suit', imag: SuitImage,  cost: 1590}, {name:'Yellow Shirt', imag: HatImage,  cost: 599}]
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
                    <img src={item.imag}/>
                </div>
                <div className="product-details">
                    <span className="product-catagory">Clothes</span>
                    <h4><a href="">{item.name}</a></h4>
                    <div className="product-bottom-details">
                        <div className="product-price">${item.cost}</div>
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