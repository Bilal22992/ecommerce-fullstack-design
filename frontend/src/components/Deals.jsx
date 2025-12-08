import "../styles/Deals.css";
import laptop from "../images/laptop.png";
import smartWatch from "../images/smart-watch.png";
import camera from "../images/camera.png";
import canonCamera from "../images/canon-camera.png";
import headphones from "../images/headphones.png";
import { useState,useEffect } from "react";



function Deals ()
{
const [mongoname,setmongoname]=useState("");
 useEffect(()=>{fetch("http://localhost:5000/api/samples").then(res=>res.json()).then(response=>setmongoname(response[0].name))},[]);

    return(
         <div className=" deals-outerbox">
        <div className="deals-main">
            <div className="deals-timer">
                <p><strong>Deals and offers</strong></p>
                <p>Hygiene equipments</p>
                <ul>
                    <li>
                        <p><strong>04</strong></p>
                        <p>Days</p>
                    </li>
                    <li>
                        <p><strong>13</strong></p>
                        <p>Hour</p>
                    </li>
                    <li>
                        <p><strong>34</strong></p>
                        <p>Min</p>
                    </li>
                    <li>
                        <p><strong>56</strong></p>
                        <p>sec</p>
                    </li>
                </ul>
            </div>


            <div className="deals-items">
                <ul>
                    <li>
                        <img src={smartWatch} alt="smartWatch"/>
                        <p>{mongoname}</p>
                        <p  className="deals-percentage">-25%</p>
                    </li>
                    <li>
                        <img src={laptop} alt="laptop"/>
                        <p>Laptops</p>
                        <p className="deals-percentage">-15%</p>
                    </li>
                    <li>
                        <img src={camera} alt="camera"/>
                        <p>GoPro cameras</p>
                        <p className="deals-percentage">-40%</p>
                    </li>
                    <li>
                        <img src={headphones} alt="headphones"/>
                        <p>Headphones</p>
                        <p className="deals-percentage">-25%</p>
                    </li>
                    <li className="deals-item-lastelement">
                        <img src={canonCamera} alt="canonCamera"/>
                        <p>Canon Cameras</p>
                        <p className="deals-percentage">-25%</p>
                    </li>
                    
                    


                </ul>
            </div>
            
        </div>
         </div>

    )
}

export default Deals;