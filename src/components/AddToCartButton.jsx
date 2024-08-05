import PropTypes from 'prop-types';

export default function AddToCartButton({ onAddToCart }) {
   return (
      <button type="button" className="btn btn--addToCart" onClick={onAddToCart}>
         <div>
            <img src="/assets/images/icon-add-to-cart.svg" alt="" />
         </div>
         Add to cart
      </button>
   );
}

AddToCartButton.propTypes = {
   onAddToCart: PropTypes.func.isRequired,
};
