import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div className='cart'>
             <h3>Order Summary</h3>
                <p>Selected-Items:{cart.length}</p>
                <p>Total-Price: </p>
                <p>Shipping-Total:</p>
                <p>Tax:</p>
                <h5>Grand-Total:</h5>
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