export default function Cart() {
   return (
      <div className="cart">
         <p className="cart__title">Your Cart (#num)</p>
         <img src="/assets/images/illustration-empty-cart.svg" alt="" />
         <p className="card__description">Your added items will appear here</p>
      </div>
   );
}
