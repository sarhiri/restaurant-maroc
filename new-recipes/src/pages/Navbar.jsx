
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navstyle.css'

const Navbar = () => (
  
  <div>
  <div>
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </div>
  </div>
  
);

export default Navbar;
