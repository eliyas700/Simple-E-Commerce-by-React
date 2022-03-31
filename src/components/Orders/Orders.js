import React from "react";
import useProducts from "../../hooks/useProducts";

const Orders = () => {
  const [products, setProducts] = useProducts();
  console.log(products);
  return (
    <div>
      <h3>This Is From order Section:{products.length}</h3>
    </div>
  );
};

export default Orders;
