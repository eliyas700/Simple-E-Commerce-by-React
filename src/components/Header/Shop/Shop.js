import React, { useEffect, useState } from 'react';
import { addToDb, searchInLocal } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])
    useEffect(()=>{
        const storedItems=searchInLocal()
        const savedCart=[];
        for(const item in storedItems){
            const findFromDB=products.find(product=>product.id===item);
            if(findFromDB){
                const quantity = storedItems[item];
                findFromDB.quantity=quantity;
                savedCart.push(findFromDB)

            }
        }
        setCart(savedCart)
    },[products])
    const addToCart=(item)=>{ 
        const newCart=[...cart,item]
        setCart(newCart)
        addToDb(item.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product=> <Product key={product.id} product={product} addToCart={addToCart}
                    addToDb={addToDb}></Product>)
            }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;