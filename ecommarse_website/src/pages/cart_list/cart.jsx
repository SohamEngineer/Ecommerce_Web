import { useContext } from "react";
import "../cart_list/cart.css";
import { ShoppingCart } from "../../Context/Context";

function Cart() {
  const { cartItem, setCartItem } = useContext(ShoppingCart);

  const handleQuantityChange = (id, action) => {
    const updatedCart = cartItem.map((item) => {
      if (item.id === id) {
        if (action === "increment") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (action === "decrement" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setCartItem(updatedCart); // Use the context's setter function
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedCart);
  };

  const calculateSubtotal = (price, quantity) => price * quantity;

  const calculateTotal = () => {
    return cartItem.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cartItem.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((item) => (
                <tr key={item.id}>
                  <td className="product">
                    <img src={item.images} alt={item.title} />
                    <p>{item.title}</p>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="quantity-buttons">
                      <button onClick={() => handleQuantityChange(item.id, "decrement")}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, "increment")}>+</button>
                    </div>
                  </td>
                  <td>${calculateSubtotal(item.price, item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-totals">
            <h2>Cart Totals</h2>
            <div className="total">
              <span>Subtotal</span>
              <span>${calculateTotal()}</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>${calculateTotal()}</span>
            </div>
            <button onClick={() => alert("Proceeding to Checkout...")}>
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
