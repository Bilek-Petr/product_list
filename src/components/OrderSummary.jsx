import { calculateTotalPrice } from '../utils/priceUtils';

export default function OrderSummary({ cartItems, onStartNewOrder }) {
   console.log(cartItems);

   const totalPrice = calculateTotalPrice(cartItems);

   return (
      <div className="order-tab">
         <div>
            <img
               src="/assets/images/icon-order-confirmed.svg"
               alt="order confirmed icon"
            />
         </div>
         <p>Order Confirmed</p>
         <p>We hope you enjoy your food!</p>
         <ul>
            {cartItems.map((item) => {
               return (
                  <>
                     <li key={item.name}>
                        <div>
                           <img src={item.image.thumbnail} alt={item.name} />
                        </div>
                        <div>
                           <p>{item.name}</p>
                           <p>{item.quantity}x</p>
                           <p>${item.price}</p>
                        </div>
                        <div>
                           <p>{(item.quantity * item.price).toFixed(2)}</p>
                        </div>
                     </li>
                  </>
               );
            })}
            <div>
               <p>Order Total</p>
               <p>${totalPrice}</p>
            </div>

            <button onClick={onStartNewOrder}>Start New Order</button>
         </ul>
      </div>
   );
}
