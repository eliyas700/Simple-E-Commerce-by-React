import React from "react";
import { Button } from "react-bootstrap";

const ReviewItem = ({ item }) => {
  return (
    <div>
      <div className="cart-product px-2">
        <div className="d-flex align-items-center">
          <img src={item.img} alt="" />
          <div className=" ps-2">
            <small className="fw-bold">{item.name}</small>
            <p>
              Price:{" "}
              <small className="text-warning fw-bold">$ {item.price}</small>
            </p>
            <p>
              Shipping Charge:{" "}
              <small className="text-warning fw-bold">$ {item.shipping}</small>
            </p>
          </div>
        </div>
        <button></button>
      </div>
    </div>
  );
};

export default ReviewItem;
