import PropTypes from 'prop-types';

export default function CartItem({ item, removeFromCart }) {
   return (
      <li className="cart__list-item" key={item.name}>
         <div>
            <p className="cart__list-item-name">{item.name}</p>
            <div className="cart__list-item-info">
               <p className="cart__list-item-qty">{item.quantity}x</p>
               <p className="cart__list-item-price">@ ${item.price.toFixed(2)}</p>
               <p className="cart__list-item-total-price">
                  ${(item.quantity * item.price).toFixed(2)}
               </p>
            </div>
         </div>
         <button className="btn btn--remove" onClick={() => removeFromCart(item)}>
            <img
               src="/product_list/assets/images/icon-remove-item.svg"
               alt="remove item icon"
            />
         </button>
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
