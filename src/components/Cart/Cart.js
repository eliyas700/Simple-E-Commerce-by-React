import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { deleteShoppingCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";
const Cart = ({ cart }) => {
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    total = product.price * product.quantity + total;
    shipping = shipping + product.shipping;
    totalQuantity = product.quantity + totalQuantity;
  }

  const tax = +(total * 0.1).toFixed(2);
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected-Items:{totalQuantity}</p>
      <p>Total-Price:$ {total} </p>
      <p>Shipping-Total:$ {shipping}</p>
      <p>Tax: $ {tax}</p>
      <h5>Grand-Total: $ {grandTotal.toFixed(2)}</h5>
      <button onClick={deleteShoppingCart} className="clear-btn">
        Clear Cart
        <FontAwesomeIcon className="ms-1" icon={faTrashCan}></FontAwesomeIcon>
      </button>
      <Link to="/order">
        <button className="review-btn   ">
          Review Order
          <FontAwesomeIcon
            className="ms-1"
            icon={faArrowRight}
          ></FontAwesomeIcon>
        </button>
      </Link>
    </div>
  );
};

export default Cart;
