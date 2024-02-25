/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { image, title, price, category, rating } = props.product;
    const handleBtnCart = props.handleBtnCart;
    
    return (
        <div className='border border-2 border-slate-400 rounded-lg flex flex-col justify-between'>
            <div className="p-2">
                <img className='w-56 h-[250px] mx-auto my-5' src={image} alt="" />
                <div className='text-slate-700'>
                    <h2 className='text-lg font-bold'>{title}</h2>
                    <h3 className='text-base font-medium'>Price: {price}</h3>
                    <p className='mt-3'>Category: {category}</p>
                    <p>Rating: {rating.rate} Star</p>
                </div>
            </div>
            <button onClick={() => handleBtnCart(props.product)} className='bg-orange-200 w-full h-11 hover:bg-orange-300 rounded-b-md border border-slate-400'>Add to Cart <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;