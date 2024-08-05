import PropTypes from 'prop-types';
import { useState } from 'react';

export default function ProductItem({ product, addToCart }) {
   const [quantity, setQuantity] = useState(1);
   const [isAdded, setIsAdded] = useState(false);

   const incrementQuantity = () => {
      if (quantity < 9) setQuantity((prevQuantity) => prevQuantity + 1);
   };

   const decrementQuantity = () => {
      if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
   };

   const handleAddToCart = (e) => {
      e.preventDefault();
      addToCart({ ...product, quantity });
      setIsAdded(true);
   };

   return (
      <li className="product-list__item">
         <img src={product.image.desktop} alt={product.name} />
         <h2 className="product-item__category">{product.category}</h2>
         <p className="product-item__name">{product.name}</p>
         <p className="product-item__price">${product.price.toFixed(2)}</p>

         {isAdded ? (
            <button
               className="btn btn--quantity"
               style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
               <div className="product-item__quantity" onClick={incrementQuantity}>
                  <img
                     src="/assets/images/icon-increment-quantity.svg"
                     alt={`increment quantity of ${product.name}`}
                  />
               </div>
               <span>{quantity}</span>
               <div className="product-item__quantity" onClick={decrementQuantity}>
                  <img
                     src="/assets/images/icon-decrement-quantity.svg"
                     alt={`decrement quantity of ${product.name}`}
                  />
               </div>
            </button>
         ) : (
            <button
               type="button"
               className="btn btn--addToCart"
               onClick={handleAddToCart}
            >
               <div>
                  <img src="/assets/images/icon-add-to-cart.svg" alt="" />
               </div>
               Add to cart
            </button>
         )}
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
};
