
import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import Header from './components/Header';
import Category from './components/Category';
import Deals from './components/Deals';



function App() {
  return (
   <Router>
    <Header/>
    <Navbar/>
    <Category/>
    <Deals/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/productListing' element={<ProductListing/>}/>
      <Route path='/productDetails' element={<ProductDetails/>}/>
      

    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
