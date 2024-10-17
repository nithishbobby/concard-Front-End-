import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">ConnexCard</Link>
      </div>
      <div className="navbar-links">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to= "/profile">Profile</Link>
        <Link to="card">Card</Link>
      </div>
    </nav>
  );
};

export default Navbar;
