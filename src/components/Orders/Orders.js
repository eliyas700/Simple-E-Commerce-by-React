import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./order.css";
const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const deleteItem = (item) => {
    const rest = cart.filter((product) => product.id !== item.id);
    setCart(rest);
    removeFromDb(item.id);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((item) => (
          <ReviewItem
            deleteItem={deleteItem}
            key={item.id}
            item={item}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/shipping" style={{ textDecoration: "none" }}>
            <button className="review-btn">
              CheckOut Order{" "}
              <FontAwesomeIcon className="ms-1" icon={faTruckArrowRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
