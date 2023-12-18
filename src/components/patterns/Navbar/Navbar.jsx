import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav data-testid='navbar-container'>
      <ul>
        <li>
          <Link to='/'>Products</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
        <li>
          <Link to='/userProfile'>Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;