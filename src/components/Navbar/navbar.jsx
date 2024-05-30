// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './navbar.css';
import NavButton from '../NavButton/NavButton';

import homeIcon from '../../assets/icons/home.svg';
import profileIcon from '../../assets/icons/profile.svg';
import projectsIcon from '../../assets/icons/folder.svg';
import contactIcon from '../../assets/icons/mail_outline.svg';

const Navbar = () => {
const location = useLocation();

  return (
    <div className='align-navbar-container'>
      <div className='navbar-container'>
        <Link to='/'>
          <NavButton label='Home' icon={homeIcon} selected={location.pathname === '/home'} />
        </Link>

        <Link to='/about-me'>
          <NavButton label='About' icon={profileIcon} selected={location.pathname === '/about-me'} />
        </Link>

        <Link to='/projects'>
          <NavButton label='Projects' icon={projectsIcon} selected={location.pathname === '/projects'} />
        </Link>

        <Link to='/contact-me'>
          <NavButton label='Contact' icon={contactIcon} selected={location.pathname === '/contact-me'} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar;