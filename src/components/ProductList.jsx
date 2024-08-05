import ProductItem from './ProductItem';
import { useState, useEffect } from 'react';

export default function ProductList() {
   const [data, setData] = useState([]);
   const [cart, setCart] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('/assets/data/data.json');
            const result = await response.json();
            setData(result);
         } catch (err) {
            console.error('Error fetching data', err);
         }
      };

      fetchData();
   }, []);

   const addToCart = (product) => {
      setCart((prevCart) => {
         const existingProduct = prevCart.find((item) => item.name === product.name);
         if (existingProduct) {
            return prevCart.map((item) =>
               item.name === product.name
                  ? { ...item, quantity: item.quantity + product.quantity }
                  : item
            );
         }
         return [...prevCart, product];
      });
   };

   console.log(cart);

   return (
      <ul className="product-list">
         {data.map((product) => {
            return (
               <ProductItem
                  key={crypto.randomUUID()}
                  product={product}
                  addToCart={addToCart}
               />
            );
         })}
      </ul>
   );
}
