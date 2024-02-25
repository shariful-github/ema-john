import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToLocalStorage, deleteShoppingItems, getShoppingItems } from '../../utilities/manageLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  const handleBtnCart = (product) => {
    const tempCart = [...cart, product];
    setCart(tempCart);
    addToLocalStorage(product.id);
  }

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingItems();
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  useEffect(() => {
    const storedItems = getShoppingItems();
    const savedCart = [];

    for (const id in storedItems) {
      const addedProduct = products.find(product => product.id == id);
      if (addedProduct) {
        const quantity = storedItems[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart);
  }, [products])


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
        <Cart
          cart={cart}
          handleClearCart={handleClearCart}
        >
          <Link to={'/order'}>
            <button className='text-left p-3 bg-amber-500 text-white w-11/12 h-11 rounded-md text-base font-semibold mt-3 hover:bg-amber-600 flex justify-between items-center'>
              <span>Review Order</span>
              <span><FontAwesomeIcon icon={faArrowRight} /></span>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;