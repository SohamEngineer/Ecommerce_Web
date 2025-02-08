import { useContext } from "react";
import { ShoppingCart } from "../Context/Context";
import { useNavigate } from "react-router-dom";



function Home(){
    const{listofProduct}=useContext(ShoppingCart);
    console.log(listofProduct)
    const navigate=useNavigate();
    const handleShop=()=>{
        navigate("/productlist")
    }
    return(
        <div className="banner">
  <div className="banner-content">
    <p className="new-collection">NEW COLLECTION</p>
    <h1 className="banner-title">HALLOWEEN DECORATIONS</h1>
    <p className="banner-description">
      Whether you prefer the charm of classic Halloween decor or the thrill
      of modern and innovative designs, these decorations invite you to
      join in the celebration of all things eerie, enigmatic, and
      enchanting.
    </p>
    <button className="shop-now-button" onClick={handleShop}>SHOP NOW</button>
  </div>
    </div>
    )
}
export default Home