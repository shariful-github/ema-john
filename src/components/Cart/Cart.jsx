/* eslint-disable react/prop-types */
import React from 'react';

const Cart = ({cart}) => {
    let totalPrice = 0;
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        quantity = quantity + product.quantity;
    }

    const totalTax = totalPrice*7/100;
    const grandTotal = totalPrice + totalTax;
    return (
        <div>
            <h2 className='text-center text-xl my-5 font-bold'>Order Summary</h2>
            <h6>Total Items: {quantity}</h6> 
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Tax: ${totalTax.toFixed(2)}</p>
            <h6 className='font-bold'>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;