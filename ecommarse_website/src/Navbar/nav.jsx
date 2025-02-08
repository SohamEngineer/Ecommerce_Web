import  { useContext, useState } from "react";
import "../Navbar/nav.css";
import ProductList from "../pages/Product_list/productlist";
import { Route,Link,Routes, useLocation } from "react-router-dom"

import ProductDetails from "../pages/product_details/Prouductdetails";
import Cart from "../pages/cart_list/cart";
import { ShoppingCart } from "../Context/Context";
import About from "../about/about";
import Contact from "../Contact/contact";
import Home from "../Home/home";
 function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const{cartItem}=useContext(ShoppingCart);
console.log(cartItem);
const location=useLocation();
  return (
    <>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo">
          🎃 <span>Halloween Shop</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </div>

        {/* Menu Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/Home" className={location.pathname==="/Home"? "active" :""}>Home</Link>
          </li>
          <li>
            <Link to="/productlist" className= {location.pathname==="/productlist" ? "active" : ""} >Shop</Link> {/* Navigates to Product List */}
          </li>
          <li>
            <Link to="/about" className= {location.pathname==="/about" ? "active" : ""}>About</Link>
          </li>
          <li>
            <Link to="/contact" className= {location.pathname==="/contact" ? "active" : ""}>Contact</Link>
          </li>

          {/* Cart Icon */}
          <li className="cart">
            <Link to="/addtocart"> {/* Navigates to Cart Page */}
              🛒 <span className="cart-badge">{cartItem?.length ? cartItem.length:0}</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} /> {/* Dynamic route */}
      <Route path="/addtocart" element={<Cart />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    
</>

  );
}
export default Navbar