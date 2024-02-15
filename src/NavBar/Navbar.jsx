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
          <Link to="/dashboard/home">Home</Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/dashboard/about">About</Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/dashboard/services">Services</Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/dashboard/contact">Contact</Link>
        </li>
        <li className="navbar-menu-item dropdown">
          <button className="dropdown-btn">UserName</button>
          <div className="dropdown-content">
            <Link to="/dashboard/profile">Profile</Link>
            <Link to="/dashboard/settings">Settings</Link>
            <Link to="/" onClick={handleLogout}><button>Logout</button></Link>
            
          </div>
        </li>
      </ul>
      <div className="navbar-logo">
        <img src="https://cdn.pixabay.com/photo/2014/03/25/16/32/user-297330_1280.png" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
