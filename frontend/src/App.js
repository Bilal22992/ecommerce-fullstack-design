
import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';



function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/productListing' element={<ProductListing/>}/>
      <Route path='/productDetails' element={<ProductDetails/>}/>
      

    </Routes>
   </Router>
  );
}

export default App;
