import React from "react";
import "./profile_page.css";

type Props = {
    itemImage: string;  
}


function Item({itemImage}:Props){
    return (
        <div className="itemComponent">
          <img src={itemImage} className="itemImage"></img>
          <h3 className="itemName">Example award</h3>
        </div>
    )
}


export default Item; 