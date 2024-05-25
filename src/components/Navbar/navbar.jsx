// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './navbar.css';
import NavButton from '../NavButton/NavButton';

const Navbar = () => {
const location = useLocation();

  return (
    <div className='align-navbar-container'>
      <div className='navbar-container'>
        <Link to='/'>
          <NavButton label='Home' icon='src/assets/icons/home.svg' selected={location.pathname === '/home'} />
        </Link>

        <Link to='/about'>
          <NavButton label='About' icon='src/assets/icons/profile.svg' selected={location.pathname === '/profile'} />
        </Link>

        <Link to='/projects'>
          <NavButton label='Projects' icon='src/assets/icons/folder.svg' selected={location.pathname === '/projects'} />
        </Link>

        <Link to='/contact'>
          <NavButton label='Contact' icon='src/assets/icons/mail_outline.svg' selected={location.pathname === '/contact-me'} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar;