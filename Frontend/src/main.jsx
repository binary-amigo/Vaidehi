import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Shopsignup from './components/shop/Shopsignup.jsx';
import Shoplogin from './components/shop/Shoplogin.jsx';
import UserProfile from './components/user/UserProfile.jsx';
import HomePage from './components/home/HomePage.jsx';
import Seat from './components/Seat/Seat.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import Shop from './Pages/Shop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/seats",
    element: <Seat />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/shop/signup",
    element: <Shopsignup />,
  },
  {
    path: "/shop/login",
    element: <Shoplogin />,
  },{
    path: "/user/profile",
    element: <UserProfile />,
  },{
    path: "/checkout",
    element: <Checkout />,
  },  
  {
    path: "/shop",
    element: <Shop />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
