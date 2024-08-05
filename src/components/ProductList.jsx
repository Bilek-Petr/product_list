import { useState, useEffect } from 'react';

export default function ProductList() {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('../public/assets/data/data.json');
            const result = await response.json();
            setData(result);
         } catch (err) {
            console.error('Error fetching data', err);
         }
      };

      fetchData();
   }, []);

   return (
      <>
         <ul className="product-list">
            {data.map((product) => {
               return (
                  <li key={crypto.randomUUID()} className="product-list__item">
                     <img src={product.image.desktop} alt={product.name} />
                     <h2 className="product-item__category">{product.category}</h2>
                     <p className="product-item__name">{product.name}</p>
                     <p className="product-item__price">{product.price}</p>
                  </li>
               );
            })}
         </ul>
      </>
   );
}
