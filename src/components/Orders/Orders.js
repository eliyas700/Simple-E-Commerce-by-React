import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./order.css";
const Orders = () => {
  const [products, setProducts] = useProducts();

  const [cart, setCart] = useCart(products);
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((item) => (
          <ReviewItem key={item.id} item={item}></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
