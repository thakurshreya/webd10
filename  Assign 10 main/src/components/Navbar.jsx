import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from './actions'; // Update the path to where your actions are defined
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear the user session
    dispatch(logout()); // Dispatch the logout action
    navigate("/login"); // Navigate to login page
  };

  return (
    <div className="navbar_container">
      <Link to="/" className="navbar_element">Home</Link>
      <Link to="/about" className="navbar_element">About</Link>
      <Link to="/jobs" className="navbar_element">Jobs</Link>
      <Link to="/contact" className="navbar_element">Contact</Link>
      <Link to="/gallery" className="navbar_element">Gallery</Link>
      
      {/* Changed from <Link> to <button> or <div> to handle click */}
      <div onClick={handleLogout} className="navbar_element" style={{cursor: 'pointer'}}>
        Logout
      </div>
    </div>
  );
};

export default Navbar;
