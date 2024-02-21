import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {  
  const navigate = useNavigate();   

  const handleLogout = () => {
    navigate('/');
  };
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/mocktests">Mock Tests</Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="navbar-menu-item dropdown">
          <button className="dropdown-btn">Settings</button>
          <div className="dropdown-content">
            <Link to="/home/profile">Profile</Link>
            <Link to="/home/settings">Settings</Link>
            <Link to="/" onClick={handleLogout}><button>Logout</button></Link>
            
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
