import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingItems, removeFromLocalStorage } from '../../utilities/manageLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
    const storedCart = useLoaderData();
    const [cart, setCart] = useState(storedCart);

    const handleDeleteProduct = (id) => {
        const remainingProducts = cart.filter(product => product.id !== id);
        setCart(remainingProducts);
        removeFromLocalStorage(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingItems();
    }

    return (
        <div className="grid grid-cols-5 gap-2">
            <div className="col-span-4">
                <h2 className='text-center text-4xl m-10 font-bold'>Order Page</h2>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleDeleteProduct={handleDeleteProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="col-span-1 bg-orange-200 pl-4 h-screen w-64 sticky top-0">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link to={'/checkout'}>
                        <button className='text-left p-3 bg-amber-500 text-white w-11/12 h-11 rounded-md text-base font-semibold mt-3 hover:bg-amber-600 flex justify-between items-center'>
                            <span>Proceed Checkout</span>
                            <span><FontAwesomeIcon icon={faCreditCard} /></span>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;