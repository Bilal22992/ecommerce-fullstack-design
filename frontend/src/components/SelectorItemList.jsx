import "../styles/SelectorItemList.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

function SelectorItemList()
{
     const [itemdata,setitemdata]=useState([]);
    useEffect( ()=>{
        fetch("http://localhost:5000/api/test").then(res=>res.json()).then(response=>setitemdata(response));

    },[])
    return(
        <div>
            {
                itemdata.map((item,index) =>
        <div className="selector-item-list-main" key={index}>
            <div className="selector-item-list-image">
            <img src={item.ImageBase64} alt="item"></img>
            </div>
            <div className="selector-item-list-item-details">
                <div className="selector-item-list-name">
                <p>{item.name}</p>
                <i className="fa-regular fa-heart"></i>
                </div>
                <p><strong>${item.price}</strong></p>
                <div className="selector-item-list-rating">
                    <p>{item.rating}</p>
                    <p>orderNO</p>
                    <p className="selector-item-list-shipping-type"> Shipping Type</p>
                </div>
                <p>detail</p>
                <Link to={`/productDetails/${item._id}`}><p className="selector-item-list-view-details">View Details</p></Link>
            </div>
        </div>
                )
}
        </div>
            
    )
}

export default SelectorItemList;