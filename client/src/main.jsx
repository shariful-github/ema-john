import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Home from './components/Layout/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Order from './components/Order/Order.jsx';
import Login from './components/Login/Login.jsx';
import loadReviewProduct from './Loaders/loadReviewProduct.js';
import Checkout from './components/Checkout/Checkout.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
        loader: loadReviewProduct,
      },
      {
        path: '/order',
        element: <Order></Order>,
        loader: loadReviewProduct,
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/checkout',
        element: <PrivateRoute> <Checkout></Checkout> </PrivateRoute>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
