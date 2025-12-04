
// import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar ()
{

    return(
        <div className="navbar-main">
            {/* <p><Link to="/" >Home</Link></p> 
            <Link to="/cart">Cart</Link>
            <Link to="/productListing">productListings</Link>
            <Link to="/productDetails">productDetails</Link> */}
            <div className="navbar-left">
                <ul>
                    <li>
                        <div className="navbar-allcategory">
                        <i className="fa-solid fa-bars"></i>
                        <p>All Categories</p>
                        </div>
                        </li>
                    <li>Hot Offers</li>
                    <li>Gift Boxes</li>
                    <li>Projects</li>
                    <li>Menu Item</li>
                    <li><select>
                        <option>
                        Help
                        </option>
                        <option> Customer Service</option>
                        </select></li>
                </ul>   
            </div>
            <div className="navbar-right">
                <ul>
                  <li><select>
                    <option>English,USD</option>
                    <option>English,GB</option>
                    <option>Spanish,ESP</option>
                  
                  </select></li>
                    <li></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar;