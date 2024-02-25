import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();

    const handleOnSubmit = (event) => {
        event.preventDefault();

        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }


    return (
        <div className='w-[400px] border border-slate-400 mx-auto p-10 mt-10 rounded-lg text-slate-700'>
            <h2 className='text-center text-4xl mt-2'>Login</h2>
            <form onSubmit={handleOnSubmit}>
                <div className='my-5'>
                    <label htmlFor="email" className='block m-1'>Email</label>
                    <input
                        type="email"
                        className='border border-slate-400 rounded-md w-full h-12 p-3 focus:outline-orange-200'
                        name='email'
                        required
                    />
                </div>
                <div className='my-5'>
                    <label htmlFor="password" className='block m-1'>Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className='border border-slate-400 rounded-md w-full h-12 p-3 focus:outline-orange-200'
                        name='password'
                        required
                    />
                    <label>
                        <input onClick={() => setShowPassword(!showPassword)} type='checkbox'  className='mr-1' />
                        <small>Show Password</small>
                    </label>
                </div>
                <input type="submit" value='Login' className='mt-4 w-full h-12 rounded-md font-semibold bg-orange-200 hover:bg-orange-300 text-slate-800 cursor-pointer' />
            </form>
            <div className='text-center mt-1'>
                <small>New to Ema-John?<Link to={'/signup'} className='text-orange-400 hover:text-orange-600'> Create New Account</Link></small>
            </div>
            <p className='text-center mt-1 text-red-600'>{error}</p>
        </div>
    );
};

export default Login;