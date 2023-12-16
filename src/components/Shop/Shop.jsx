import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => setProducts(data))
  }, [])
  return (
    <div className="grid grid-cols-5 gap-2">
      <div className="col-span-4 grid grid-cols-3 gap-3 p-3">
        {
          products.map(product => <Product key={product.id} product={product}></Product>)
        }
      </div>
      <div className="col-span-1">
        <p>Cart Area</p>
      </div>
    </div>
  );
};

export default Shop;