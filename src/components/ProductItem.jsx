import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import QuantityControl from './QuantityControl';
import AddToCartButton from './AddToCartButton';
import ResponsiveImage from './ResponsiveImage';

export default function ProductItem({
   product,
   cart,
   addToCart,
   updateCartQuantity,
   removeFromCart,
}) {
   const [productWithQuantity, setProductWithQuantity] = useState({
      ...product,
      quantity: 0,
   });
   const [isAdded, setIsAdded] = useState(false);

   useEffect(() => {
      const cartItem = cart.find((item) => item.name === product.name);
      if (cartItem) {
         setProductWithQuantity(cartItem);
         setIsAdded(cartItem.quantity > 0);
      } else {
         setProductWithQuantity({ ...product, quantity: 0 });
         setIsAdded(false);
      }
   }, [cart, product]);

   const incrementQuantity = () => {
      if (productWithQuantity.quantity < 9) {
         updateCartQuantity(product.name, productWithQuantity.quantity + 1);
      }
   };

   const decrementQuantity = () => {
      if (productWithQuantity.quantity > 1) {
         updateCartQuantity(product.name, productWithQuantity.quantity - 1);
      }
   };

   const handleAddToCart = () => {
      setProductWithQuantity((prevProduct) => ({
         ...prevProduct,
         quantity: 1,
      }));
      setIsAdded(true);
      addToCart({ ...product, quantity: 1 });
   };

   const handleRemoveFromCart = () => {
      removeFromCart(product);
   };

   return (
      <li className="product-list__item">
         <div className="product-list__item-container">
            <div className="product-list__item-img">
               <ResponsiveImage product={product} />
               {isAdded ? (
                  <QuantityControl
                     quantity={productWithQuantity.quantity}
                     incrementQuantity={incrementQuantity}
                     decrementQuantity={decrementQuantity}
                  />
               ) : (
                  <AddToCartButton onAddToCart={handleAddToCart} />
               )}
            </div>
         </div>
         <div className="product-list__item-info">
            <h2 className="product-list__item-category">{product.category}</h2>
            <p className="product-list__item-name">{product.name}</p>
            <p className="product-list__item-price">${product.price.toFixed(2)}</p>
         </div>
      </li>
   );
}

//to fix eslint error
ProductItem.propTypes = {
   product: PropTypes.shape({
      image: PropTypes.shape({
         desktop: PropTypes.string.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
   }).isRequired,
   addToCart: PropTypes.func.isRequired,
   updateCartQuantity: PropTypes.func.isRequired,
};
