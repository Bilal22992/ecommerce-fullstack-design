import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Deals from "../components/Deals";
import camera from "../images/camera.png";
import chair from "../images/chair.png";

import blender from "../images/blender.png";
import foldingchair from "../images/folding-chair.png";
import juicer from "../images/juicer.png";
import matress from "../images/matress.png";
import plant from "../images/plant.png";
import pot from "../images/pot.png";
import lamp from "../images/lamp.png";


import CategoryProducts from "../components/CategoryProducts";
import bgimage1 from "../images/bg-1.png";
import bgimage2 from "../images/bg-2.png";
import Subscribe from "../components/Subscribe";
import Recomended from "../components/Recomended";

function Home ()
{

    const homeData = [
    { itemname: "Soft chairs", price: 19, image:chair },
    { itemname: "Sofa & chair", price: 19, image: foldingchair },
    { itemname: "Kitchen dishes", price: 19, image: pot },
    { itemname: "Smart watches", price: 19, image: plant },
    { itemname: "Kitchen mixer", price: 100, image: matress },
    { itemname: "Blenders", price: 39, image: blender },
    { itemname: "Home appliance", price: 19, image: lamp },
    { itemname: "Coffee maker", price: 10, image: juicer },
  ];
  const techData = [
    { itemname: "Soft chairs", price: 19, image:chair },
    { itemname: "Sofa & chair", price: 19, image: foldingchair },
    { itemname: "Kitchen dishes", price: 19, image: pot },
    { itemname: "Smart watches", price: 19, image: camera },
    { itemname: "Kitchen mixer", price: 100, image: matress },
    { itemname: "Blenders", price: 39, image: blender },
    { itemname: "Home appliance", price: 19, image: lamp },
    { itemname: "Coffee maker", price: 10, image: juicer },
  ];
    return(
        <div>

       
       <Header/>
    <Navbar/>
    <Category/>
    <Deals/>
<CategoryProducts title="Home and outdoor"items={homeData} bgImage={bgimage1}/>
<CategoryProducts title="Consumer electronics and gadgets"items={techData} bgImage={bgimage2}/>
<Recomended/>
<Subscribe/>
        </div>
        

    )
}

export default Home;