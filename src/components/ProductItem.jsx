import PropTypes from 'prop-types';

export default function ProductItem({ product }) {
   return (
      <li className="product-list__item">
         <img src={product.image.desktop} alt={product.name} />
         <h2 className="product-item__category">{product.category}</h2>
         <p className="product-item__name">{product.name}</p>
         <p className="product-item__price">{product.price}</p>
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
};
