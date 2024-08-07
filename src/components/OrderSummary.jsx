import { calculateTotalPrice } from '../utils/priceUtils';

export default function OrderSummary({ cartItems, onStartNewOrder }) {
   const totalPrice = calculateTotalPrice(cartItems);

   const handleClick = (e) => {
      e.stopPropagation();
   };

   return (
      <div className="order-tab" onClick={handleClick}>
         <div className="order-tab__img">
            <img
               src="/product_list/assets/images/icon-order-confirmed.svg"
               alt="order confirmed icon"
            />
         </div>
         <p className="order-tab__title">Order Confirmed</p>
         <p className="order-tab__desc">We hope you enjoy your food!</p>
         <ul className="order-tab__list">
            {cartItems.map((item) => {
               return (
                  <>
                     <li className="order-tab__list-item" key={item.name}>
                        <div className="order-tab__list-item-img">
                           <img src={item.image.thumbnail} alt={item.name} />
                        </div>
                        <div className="order-tab__list-item-info">
                           <p className="order-tab__item-info-name | cart__list-item-name">
                              {item.name}
                           </p>
                           <div className="flex gap-1">
                              <p className="order-tab__item-info-qty | cart__list-item-qty">
                                 {item.quantity}x
                              </p>
                              <p className="order-tab__item-info-price">
                                 @ ${item.price.toFixed(2)}
                              </p>
                           </div>
                        </div>
                        <div className="order-tab-wrapper">
                           <p className="order-tab__total">
                              ${(item.quantity * item.price).toFixed(2)}
                           </p>
                        </div>
                     </li>
                  </>
               );
            })}
            <div className="order-tab__sum | cart__total">
               <p className="tab-sum__text">Order Total</p>
               <p className="tab-sum__price | cart__total-price">
                  ${totalPrice.toFixed(2)}
               </p>
            </div>

            <button className="btn btn--new-order" onClick={onStartNewOrder}>
               Start New Order
            </button>
         </ul>
      </div>
   );
}
