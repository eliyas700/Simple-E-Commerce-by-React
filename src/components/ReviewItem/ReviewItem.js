import React from "react";

import { AiFillDelete } from "react-icons/ai";

const ReviewItem = (props) => {
  const { item, deleteItem } = props;
  return (
    <div>
      <div className="cart-product px-2 my-auto">
        <div className="d-flex align-items-center">
          <img src={item.img} alt="" />
          <div className=" ps-2">
            <small className="fw-bold" title={item.name}>
              {item.name}
              {/* {item.name.length > 25
                ? item.name.slice(0, 25) + "......"
                : item.name} */}
            </small>
            <p className="p-0 m-0">
              Price:
              <small className="text-warning fw-bold">$ {item.price}</small>
            </p>
            <p className="p-0 m-0">
              Shipping Charge:
              <small className="text-warning fw-bold">$ {item.shipping}</small>
            </p>
            <p>
              Quantity: <small>{item.quantity}</small>
            </p>
          </div>
        </div>
        <button
          onClick={() => deleteItem(item)}
          className="my-auto text-danger border-danger"
        >
          <AiFillDelete size={25} />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
