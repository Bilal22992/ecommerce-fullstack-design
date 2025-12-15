import "../styles/SelectorItemList.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import image from "../images/camera.png";
import { useEffect, useState } from "react";

function SelectorItemList()
{ const [itemdata,setitemdata]=useState([]);
    useEffect( ()=>{
        fetch("http://localhost:5000/api/test").then(res=>res.json()).then(response=>setitemdata(response));

    },[])
    return(
        <div className="selector-item-list-main">
            <div className="selector-item-list-image">
            <img src={image}></img>
            </div>
            <div className="selector-item-list-item-details">
                <div className="selector-item-list-name">
                <p>ItemName</p>
                <i className="fa-regular fa-heart"></i>
                </div>
                <p><strong>$Price</strong></p>
                <div className="selector-item-list-rating">
                    <p>rating</p>
                    <p>orderNO</p>
                    <p className="selector-item-list-shipping-type"> Shipping Type</p>
                </div>
                <p>detail</p>
                <p className="selector-item-list-view-details">View Details</p>
            </div>
        </div>
    )
}

export default SelectorItemList;