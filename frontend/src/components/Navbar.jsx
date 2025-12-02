
import { Link } from "react-router-dom";

function Navbar ()
{

    return(
        <div>
            <Link to="/" >Home</Link> 
            <Link to="/cart">Cart</Link>
            <Link to="/productListing">productListings</Link>
            <Link to="/productDetails">productDetails</Link>
            
        </div>
    )
}

export default Navbar;