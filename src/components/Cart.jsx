import PropTypes from 'prop-types';

export default function Cart({ cartItems, removeFromCart }) {
   const itemsWithTotalPrice = cartItems.map((item) => ({
      ...item,
      itemPriceTotal: item.quantity * item.price,
   }));

   const priceTotal = itemsWithTotalPrice.reduce(
      (total, item) => total + item.itemPriceTotal,
      0
   );

   return (
      <div className="cart">
         <p className="cart__title">Your Cart ({cartItems.length})</p>

         {cartItems.length === 0 ? (
            <div>
               <img src="/assets/images/illustration-empty-cart.svg" alt="Empty cart" />
               <p className="card__description">Your added items will appear here</p>
            </div>
         ) : (
            <>
               <ul>
                  {itemsWithTotalPrice.map((item) => (
                     <li key={item.name}>
                        <p>{item.name}</p>
                        <div>
                           <p>Quantity: {item.quantity}</p>
                           <p>Price: ${item.price.toFixed(2)}</p>
                        </div>
                        <button onClick={() => removeFromCart(item)}>X</button>
                     </li>
                  ))}
               </ul>
               <div className="cart__total">
                  <p>Total Price: ${priceTotal.toFixed(2)}</p>
               </div>
            </>
         )}
      </div>
   );
}

Cart.propTypes = {
   cartItems: PropTypes.arrayOf(
      PropTypes.shape({
         image: PropTypes.shape({
            desktop: PropTypes.string.isRequired,
         }).isRequired,
         name: PropTypes.string.isRequired,
         category: PropTypes.string.isRequired,
         price: PropTypes.number.isRequired,
         quantity: PropTypes.number.isRequired,
      })
   ).isRequired,
};
