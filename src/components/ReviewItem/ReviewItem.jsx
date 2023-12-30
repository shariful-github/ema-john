/* eslint-disable react/prop-types */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product }) => {
    const { title, price, image, quantity } = product;

    return (
        <div className='border border-zinc-400 w-4/6 h-28 my-5 mx-auto rounded-md flex justify-between items-center'>
            <div className='p-2 flex'>
                <img className='border border-zinc-400 w-24 h-24 grid place-items-center rounded-md p-2' src={image} alt="" />
                <div className='ml-4'>
                    <h4 className='text-xl font-bold'>{title}</h4>
                    <h6 className='text-base font-semibold'>Price: <span className='text-amber-500'>${price}</span></h6>
                    <p className='text-sm font-medium'>Quantity: <span className='text-amber-500'>{quantity}</span></p>
                </div>
            </div>
            <div className='mr-5'>
                <button className='bg-red-200 w-12 h-12 rounded-full text-red-400 text-2xl'>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;