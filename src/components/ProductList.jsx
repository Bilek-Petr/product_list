import ProductItem from './ProductItem';
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
      <ul className="product-list">
         {data.map((product) => {
            return <ProductItem key={crypto.randomUUID()} product={product} />;
         })}
      </ul>
   );
}
