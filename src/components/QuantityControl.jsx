import PropTypes from 'prop-types';

export default function QuantityControl({
   quantity,
   incrementQuantity,
   decrementQuantity,
}) {
   return (
      <button
         className="btn btn--quantity"
         style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
      >
         <div className="product-item__quantity" onClick={incrementQuantity}>
            <img
               src="/assets/images/icon-increment-quantity.svg"
               alt={`increment quantity`}
            />
         </div>
         <span>{quantity}</span>
         <div className="product-item__quantity" onClick={decrementQuantity}>
            <img
               src="/assets/images/icon-decrement-quantity.svg"
               alt={`decrement quantity`}
            />
         </div>
      </button>
   );
}

QuantityControl.propTypes = {
   quantity: PropTypes.number.isRequired,
   incrementQuantity: PropTypes.func.isRequired,
   decrementQuantity: PropTypes.func.isRequired,
};