import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToLocalStorage, deleteShoppingItems, getShoppingItems } from '../../utilities/manageLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const { count: totalProducts } = useLoaderData();
  const [productsPerPage, setProductsPerPage] = useState(10);
  const noOfPages = Math.ceil(totalProducts / productsPerPage);
  const pages = [...Array(noOfPages).keys()];
  const [currentPage, setCurrentPage] = useState(0);


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
    fetch(`http://localhost:5000/products?page=${currentPage}&size=${productsPerPage}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [currentPage, productsPerPage])

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

  const handleProductPerPage = (e) => {
    setProductsPerPage(e.target.value);
    setCurrentPage(0);
  }

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className='mb-16'>
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

      <div className='text-center'>
        <button onClick={() => handlePrevious()} className="btn border-gray-400 bg-white mr-3">Previous</button>
        {
          pages.map(page => <button
            onClick={() => setCurrentPage(page)}
            className={`btn border-gray-400 mr-3 hover:bg-amber-500 ${currentPage === page ? 'bg-amber-500' : 'bg-white'}`}
            key={page}
          >{page}</button>)
        }
        <select className='border border-gray-400 p-3' value={productsPerPage} onChange={handleProductPerPage}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <button onClick={() => handleNext()} className="btn border-gray-400 bg-white ml-3">Next</button>
      </div>
    </div>
  );
};

export default Shop;