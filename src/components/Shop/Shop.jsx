import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  const handleBtnCart = (product) => {
    const tempCart = [...cart, product];
    setCart(tempCart);
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className="grid grid-cols-5 gap-2">
      <div className="col-span-4 grid grid-cols-3 gap-14 p-14">
        {
          products.map(product => <Product key={product.id} product={product} handleBtnCart={handleBtnCart}></Product>)
        }
      </div>
      <div className="col-span-1 bg-orange-200 pl-4 h-screen">
        <h2 className='text-center text-xl font-medium my-5'>Order Summary</h2>
        <h6>Total Items: {cart.length}</h6>
      </div>
    </div>
  );
};

export default Shop;