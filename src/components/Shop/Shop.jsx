import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

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
          products.map(product => 
          <Product 
            key={product.id} 
            product={product} 
            handleBtnCart={handleBtnCart}
          ></Product>)
        }
      </div>
      <div className="col-span-1 bg-orange-200 pl-4 h-screen w-64 sticky top-0">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;