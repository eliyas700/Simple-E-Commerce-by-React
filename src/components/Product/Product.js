import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = ({product, addToCart}) => {
    console.log(addToCart);
    const {name,price,seller,ratings,img}=product
    return (
        <div className='product'>
           <img src={img} alt="" /> 
           <div className='product-info'>
               <h6 className='product-name'>{name}</h6>
               <p className='product-price'>Price:$ {price}</p>
               <p><small>Manufacturer:{seller}</small></p>
               <p><small>Rating:{ratings} stars</small></p>
           </div>
           <button onClick={()=>{addToCart(product)}}className='btn-cart'><p>Add To Cart</p>
           <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;