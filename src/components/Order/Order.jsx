import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const cart = useLoaderData();
    return (
        <div className="grid grid-cols-5 gap-2">
            <div className="col-span-4">
                <h2 className='text-center text-4xl m-10 font-bold'>Order Page</h2>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className="col-span-1 bg-orange-200 pl-4 h-screen w-64 sticky top-0">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;