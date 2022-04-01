import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";

const Orders = () => {
  const [products, setProducts] = useProducts();

  const [cart, setCart] = useCart(products);

  return (
    <div>
      <h3>This Is From order Section:{products.length}</h3>
      <p>Cart Has:{cart.length}</p>
    </div>
  );
};

export default Orders;
