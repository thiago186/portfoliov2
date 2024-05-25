// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            <img src="src/assets/icons/home.svg" alt="Home" />
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/profile" className="navbar-link">
            <img src="/src/assets/icons/profile.svg"alt="Profile" />
            Profile
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects" className="navbar-link">
            <img src="/src/assets/icons/folder.svg" alt="Projects" />
            Projects
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">
            <img src="//src/assets/icons/mail_outline.svg" alt="Contact Me" />
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;