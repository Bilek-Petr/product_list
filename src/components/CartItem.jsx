import PropTypes from 'prop-types';

export default function CartItem({ item, removeFromCart }) {
   return (
      <li key={item.name}>
         <p>{item.name}</p>
         <div>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
         </div>
         <button onClick={() => removeFromCart(item)}>X</button>
      </li>
   );
}

CartItem.propTypes = {
   item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
   }).isRequired,
   removeFromCart: PropTypes.func.isRequired,
};
