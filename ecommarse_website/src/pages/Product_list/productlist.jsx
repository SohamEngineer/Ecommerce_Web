import { useContext, useState } from "react"
import { ShoppingCart } from "../../Context/Context"
import "../Product_list/productlist.css"
import { useNavigate } from "react-router-dom";

function ProductList() {
  const { listofProduct } = useContext(ShoppingCart)
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const filterProducts = () => {
    switch (filter) {
      case "high":
        return listofProduct.filter((product) => product.price > 100);
      case "medium":
        return listofProduct.filter((product) => product.price >= 50 && product.price <= 100);
      case "low":
        return listofProduct.filter((product) => product.price < 50);
      default:
        return listofProduct;
    }
  };
  console.log(listofProduct)
  const filteredProducts = filterProducts();
  // console.log(listofProduct)
  const renderStars = (rating) => {
    const stars = [];
    const roundedRating = Math.round(rating); // Round to nearest whole number if necessary
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= roundedRating ? "filled-star" : "empty-star"}
        >
          ★
        </span>
      );
    }
    return stars;
  };
  const navigate = useNavigate()
  const handleCardClick = (id) => {
    navigate(`/productdetails/${id}`)
  }
  return (

    <div className="product-container">
      <h2 className="shop-title">Shop</h2>

      <div className="shop-container">
        {/* Dropdown Filter */}
        <div className="filter-dropdown">
          <label htmlFor="product-filter">Shortlist By:</label>
          <select id="product-filter" value={filter} onChange={handleFilterChange}>
            <option value="all">All Products</option>
            <option value="high">High Value Items</option>
            <option value="medium">Medium Value Items</option>
            <option value="low">Low Value Items</option>
          </select>
        </div>

        {/* Display Filtered Products */}
        <div className="product-grid">
          {filteredProducts.map((Product) => (
            <div key={Product.id} className="product-card"
            >
              {Product.discountPercentage && (
                <div className="sale-badge">Sale!</div>
              )}

              <img src={Product.images} alt={Product.name} className="Product-image" />
              <div className="product-rating">{renderStars(Product.rating)}</div>
              <h3 className="Product-name" >{Product.title}</h3>
              <p className="Product-price">
                {Product.price && (
                  <>
                    {/* Strike-through Original Price */}
                    <span className="old-price">${Product.price.toFixed(1)}</span>

                    {/* Calculate and Display Discounted Price */}
                    <span className="sale-price">
                      ${(Product.price - (Product.price * Product.discountPercentage) / 100).toFixed(2)}
                    </span>
                  </>
                )}
              </p>
              <button className="add-to-cart" onClick={() => handleCardClick(Product.id)}>Product Details</button>
            </div>
          ))}
            
      </div>
        </div>
      </div>
  )
}
export default ProductList