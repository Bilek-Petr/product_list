import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import QuantityControl from './QuantityControl';
import AddToCartButton from './AddToCartButton';

export default function ProductItem({ product, addToCart }) {
   const [productWithQuantity, setProductWithQuantity] = useState({
      ...product,
      quantity: 0,
   });
   const [isAdded, setIsAdded] = useState(false);

   useEffect(() => {
      console.log(`${product.name} / ${productWithQuantity.quantity}`);
   }, [productWithQuantity.quantity]);

   const incrementQuantity = () => {
      if (productWithQuantity.quantity < 9) {
         setProductWithQuantity((prevProduct) => ({
            ...prevProduct,
            quantity: prevProduct.quantity + 1,
         }));
      }
   };

   const decrementQuantity = () => {
      if (productWithQuantity.quantity > 1) {
         setProductWithQuantity((prevProduct) => ({
            ...prevProduct,
            quantity: prevProduct.quantity - 1,
         }));
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

   return (
      <li className="product-list__item">
         <img src={product.image.desktop} alt={product.name} />
         <h2 className="product-item__category">{product.category}</h2>
         <p className="product-item__name">{product.name}</p>
         <p className="product-item__price">${product.price.toFixed(2)}</p>

         {isAdded ? (
            <QuantityControl
               quantity={productWithQuantity.quantity}
               incrementQuantity={incrementQuantity}
               decrementQuantity={decrementQuantity}
            />
         ) : (
            <AddToCartButton onAddToCart={handleAddToCart} />
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
