import "../styles/Header.css";
import logo from "../images/logo-colored.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header ()
{
    return (
        <div className="header-main">
            <div><img src={logo} alt="logo"/></div>
            <div className="header-search">
                <input placeholder="Search"></input>
                <select>
                    <option>All categories</option>
                    <option>Fashion</option>
                    <option>Electronics</option>
                    <option>Home</option>
                </select>
                <button>Search</button>
            </div>
            <div className="header-icons">
            
                <ul>
                    <li>
                    <div className="header-icon-box">
                    <i className="fa-solid fa-user"></i>
                    <p>Profile</p>
                    </div>
                    </li>
                    <li>
                    <div className="header-icon-box">
                    
                        <i className="fa-solid fa-message"></i>
                        <p>Messages</p>
                    
                    
                    </div>
                    </li>
                    <li>

                    <div className="header-icon-box">
                    
                        <i className="fa-solid fa-heart"></i>
                        <p>Orders</p>
                    
                    
                    </div>
                    </li>
                    <li>
                    <div className="header-icon-box">
                    
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>Cart</p>
                    
                    
                    </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Header;