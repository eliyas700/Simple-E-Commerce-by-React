import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./order.css";
const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const deleteItem = (item) => {
    const rest = cart.filter((product) => product.id !== item.id);
    console.log(rest);
    setCart(rest);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
