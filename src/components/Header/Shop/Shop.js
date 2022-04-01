import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import { addToDb, searchInLocal } from "../../../utilities/fakedb";
import Cart from "../../Cart/Cart";
import Product from "../../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedItems = searchInLocal();
    const savedCart = [];
    for (const item in storedItems) {
      const findFromDB = products.find((product) => product.id === item);
      if (findFromDB) {
        const quantity = storedItems[item];
        findFromDB.quantity = quantity;
        savedCart.push(findFromDB);
      }
    }
    setCart(savedCart);
  }, [products]);
  const addToCart = (item) => {
    let newCart = [];
    const existedItems = cart.find((prod) => prod.id === item.id);
    if (!existedItems) {
      item.quantity = 1;
      newCart = [...cart, item];
    } else {
      const unexistedItems = cart.filter((pro) => pro.id !== item.id);
      // console.log(unexistedItems, "Uniesxisted");
      existedItems.quantity = existedItems.quantity + 1;
      newCart = [...unexistedItems, existedItems];
    }
    setCart(newCart);
    addToDb(item.id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToDb={addToDb}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/order" style={{ textDecoration: "none" }}>
            {" "}
            <button className="review-btn">
              Review Order
              <FontAwesomeIcon
                className="ms-1"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
