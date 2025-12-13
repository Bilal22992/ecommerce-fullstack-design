
import "../styles/Category.css";
import {Link} from "react-router-dom"

import profile from "../images/profile-sample.png";


function Category ()
{ const list=["tech","interior"]
    return(
        <div className="category-outerbox">
        <div className="category-main">
            <div className="category-listview">
                <ul>
                    <li>Automobiles</li>
                    <li>Clothes and wear</li>
                    <li><Link key={list} to={`ProductListing/${list}`}>Home Interiors</Link></li>
                    <li><Link key={list} to={`ProductListing/${list}`}>Computer and tech</Link></li>
                    <li>Tools,equipments</li>
                    <li>Sports and outdoor</li>
                    <li>Animal and pets</li>
                    <li>Machinery tools</li>
                    <li>More Category</li>
                </ul>
            </div>
            <div className="category-image">
                
                <div className="category-banner-content">
                    <p>Latest trending</p>
                    <h2>Electronic items</h2>
                    <button>Learn more</button>
                </div>
           </div>
            
            <div className="category-right">
                <div className="category-login">
                    <div className="category-login-message-container">
                        <img src={profile} alt="profile"/>
                        <div className="category-login-message" ><p>Hi,user</p>
                        <p>let's get started</p></div>
                        </div>
                    
                    <button className="Category-join-button">Join Now</button>
                    <button className="category-login-button">Log in</button>
                </div>
                <div className="category-discount">Get US $10 off with a new supplier</div>
                <div className="category-quote">Send quotes with supplier preferences</div>
                </div>


        </div>
        </div>

    )
}

export default Category;