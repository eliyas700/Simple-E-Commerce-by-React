import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = ({cart}) => {
    let total=0;
    let shipping=0;
    for(const product of cart){
        total= product.price + total ;
        shipping=shipping+ product.shipping;

    }
    const tax= +(total *.1).toFixed(2);
    const grandTotal=total+shipping+tax;

    return (
        <div className='cart'>
             <h3>Order Summary</h3>
                <p>Selected-Items:{cart.length}</p>
                <p>Total-Price:$ {total} </p>
                <p>Shipping-Total:$ {shipping}</p>
                <p>Tax: $ {tax}</p>
                <h5>Grand-Total: $ {grandTotal.toFixed(2)}</h5>
                <button className='clear-btn'><p>Clear Cart</p>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
                <button className='review-btn'><p>Review Order</p>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Cart;