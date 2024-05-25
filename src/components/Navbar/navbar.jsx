// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import NavButton from '../NavButton/NavButton';

const Navbar = () => {
  return (
    <div className='align-navbar-container'>
      <div className='navbar-container'>
        <Link to='/'>
          <NavButton label='Home' icon='src/assets/icons/home.svg' selected={true} />
        </Link>

        <Link to='/about'>
          <NavButton label='About' icon='src/assets/icons/profile.svg' selected={false} />
        </Link>

        <Link to='/projects'>
          <NavButton label='Projects' icon='src/assets/icons/folder.svg' selected={false} />
        </Link>

        <Link to='/contact'>
          <NavButton label='Contact' icon='src/assets/icons/mail_outline.svg' selected={false} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar;