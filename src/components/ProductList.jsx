import ProductItem from './ProductItem';
import Cart from './Cart';
import OrderSummary from './OrderSummary';
import { useState, useEffect, useCallback } from 'react';

export default function ProductList() {
   const [data, setData] = useState([]);
   const [cart, setCart] = useState([]);
   const [isOrderSummaryVisible, setIsOrderSummaryVisible] = useState(false);

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

   const removeFromCart = (product) => {
      setCart((prevCart) => prevCart.filter((item) => item.name !== product.name));
   };

   const updateCartQuantity = (name, quantity) => {
      setCart((prevCart) =>
         prevCart.map((item) => (item.name === name ? { ...item, quantity } : item))
      );
   };

   const handleConfirmOrder = () => {
      setIsOrderSummaryVisible(true);
      document.body.classList.add('no-scroll');
   };

   const handleStartNewOrder = () => {
      setCart([]); // Reset cart
      setIsOrderSummaryVisible(false);
      document.body.classList.remove('no-scroll');
   };

   return (
      <>
         <div className="product-list-wrapper">
            {/* inserted header here just so it's easier to flex it, not what i am focusing on right now */}
            <header className="header">
               <h1 className="header__title">Desserts</h1>
            </header>
            <ul className="product-list">
               {data.map((product) => {
                  return (
                     <ProductItem
                        key={product.name}
                        product={product}
                        cart={cart}
                        addToCart={addToCart}
                        updateCartQuantity={updateCartQuantity}
                        removeFromCart={removeFromCart}
                     />
                  );
               })}
            </ul>
         </div>
         <Cart
            cartItems={cart}
            removeFromCart={removeFromCart}
            onConfirmOrder={handleConfirmOrder}
         />
         {isOrderSummaryVisible && (
            <OrderSummary cartItems={cart} onStartNewOrder={handleStartNewOrder} />
         )}
      </>
   );
}
