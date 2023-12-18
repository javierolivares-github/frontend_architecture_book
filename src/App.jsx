import React from "react";
import './Mock.server.js';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Navbar from './components/patterns/Navbar';
import Cart from './screens/Cart';
import Products from './screens/Products';
import UserProfile from './screens/UserProfile';
import './index.css';


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Products />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/userProfile',
        element: <UserProfile />
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
