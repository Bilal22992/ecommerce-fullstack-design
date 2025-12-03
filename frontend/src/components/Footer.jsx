
import "../styles/Footer.css";
import logo from "../images/logo-colored.png";
import google from "../images/market-button.png";
import apple from "../images/Group.png";
import us from "../images/US@2x.png"
import '@fortawesome/fontawesome-free/css/all.css';
import upicon from "../images/Vector2.png"



function Footer()
{

return(
    <div className="main">
        <div className="footer-menu">
            <div className="left-menu-logo">
                <div>
                <div><img src={logo} alt="logo-image"/></div>
                <div>Best Information about the company is just mentioned here</div>
                <div className="icon-menu">
                    <ul>
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                        <li><i className="fab fa-youtube"></i></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="center-menu"> 
                <div>
                <ul>
                    <li className="title"><strong>About</strong></li>
                    <li>About Us</li>
                    <li>Find Store</li>
                    <li>Categories</li>
                    <li>Blogs</li>
                </ul>
                </div>
                <div>
                <ul>
                   <li className="title"><strong>Partnership</strong></li>
                    <li>About Us</li>
                    <li>Find Store</li>
                    <li>Categories</li>
                    <li>Blogs</li>
                </ul>
                </div>
                <div>
                <ul>
                   <li className="title"><strong>Information</strong></li>
                    <li>Help Center</li>
                    <li>Money Refund</li>
                    <li>Shipping</li>
                    <li>Contact Us</li>
                </ul>
                </div>
                <div>
                <ul>
                  <li className="title"><strong>For Users</strong></li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Settings</li>
                    <li>My Orders</li>
                </ul>
                </div>
            </div>
            <div className="right-menu-app">
                <div>
                <ul>
                    <li className="title"><strong>Get App</strong></li>
                    <li><img src={apple} alt="apple store link"/></li>
                    <li><img src={google} alt="google store link"/></li>
                </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="copyright-item">
                <p>@Copyright 2025</p>
            </div>
            <div className="menu-item">
                
                <img src={us} alt="flag"/>
                <p>English</p>
                <img src={upicon} alt="up-menu-icon"/>
            </div>

        </div>
    </div>


)

}

export default Footer;