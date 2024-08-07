import { useState, useEffect } from 'react';

export default function ResponsiveImage({ product }) {
   const [imageSrc, setImageSrc] = useState(product.image.mobile);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth > 765) {
            setImageSrc(product.image.desktop);
         } else {
            setImageSrc(product.image.mobile);
         }
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
   }, [product.image.desktop, product.image.mobile]);

   return <img src={imageSrc} alt={product.name} />;
}
