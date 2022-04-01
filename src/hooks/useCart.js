import { useEffect, useState } from "react";
import { searchInLocal } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  //If Product is Already Available in Local storage
  useEffect(() => {
    const storedCart = searchInLocal();
    const savedCart = [];
    console.log(products);
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        let quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return [cart, setCart];
};
export default useCart;
