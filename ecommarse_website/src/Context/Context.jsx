import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCart = createContext(null);
function ShoppingCartProvider({ children }) {
  const [listofProduct, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItem, setCartItem] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products'); // Fetch data
        const result = await response.json();
        // console.log(result)
        if (result && result?.products) {
          setProduct(result?.products)
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    
    fetchProduct();
  }, []);
  
  function handleAddToCart(getProductDetails) {
    console.log(getProductDetails);
    let copyexistingCartItem = [...cartItem]
    const findingCurrentItemIndex = copyexistingCartItem.findIndex(cartItem => cartItem.id === getProductDetails.id)
    console.log(findingCurrentItemIndex)
    if (findingCurrentItemIndex === -1) {
      copyexistingCartItem.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails.price
      })
    }
    else {
      console.log("Cart is not found")
    }
    console.log(copyexistingCartItem)
    setCartItem(copyexistingCartItem)
    localStorage.setItem('cartItem', JSON.stringify(copyexistingCartItem))
    navigate("/addtocart")
  }
  //   console.log(listofProduct)
  return (
    <ShoppingCart.Provider value={
      { listofProduct,
         handleAddToCart,
         cartItem, 
         setCartItem,
    }}>{children}</ShoppingCart.Provider>

  )
}
export default ShoppingCartProvider