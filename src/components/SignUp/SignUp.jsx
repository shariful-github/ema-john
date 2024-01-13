import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleOnSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div className='w-[400px] border border-slate-400 mx-auto p-10 mt-10 rounded-lg text-slate-700'>
            <h2 className='text-center text-4xl mt-2'>Sign Up</h2>
            <form onSubmit={handleOnSubmit}>
                <div className='my-5'>
                    <label htmlFor="email" className='block m-1'>Email</label>
                    <input type="email"
                        name='email'
                        className='border border-slate-400 rounded-md w-full h-12 p-3 focus:outline-orange-200' 
                    />
                </div>
                <div className='my-5'>
                    <label htmlFor="password" className='block m-1'>Password</label>
                    <input type="password"
                        name='password'
                        className='border border-slate-400 rounded-md w-full h-12 p-3 focus:outline-orange-200'
                        required
                    />
                </div>
                <div className='my-5'>
                    <label htmlFor="password" className='block m-1'>Confirm Password</label>
                    <input type="password"
                        name='confirmPassword'
                        className='border border-slate-400 rounded-md w-full h-12 p-3 focus:outline-orange-200'
                        required
                    />
                </div>
                <input type="submit" value='Sign Up' className='mt-4 w-full h-12 rounded-md font-semibold bg-orange-200 hover:bg-orange-300 text-slate-800 cursor-pointer' />
            </form>
            <div className='text-center mt-1'>
                <small>Already have an Account<Link to={'/login'} className='text-orange-400'> Login</Link></small>
            </div>
        </div>
    );
};

export default SignUp;