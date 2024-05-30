// src/pages/Home.jsx
import React from 'react';

import Navbar from '../components/Navbar/navbar';

import './HomePage.css'; // Make sure to create this CSS file

const Home = () => {
  return (
    <div className="home-container">
      < Navbar />
      <div className="hphline hphline1" />
      <div className="hphline hphline2" />
      <div className="hphline hphline3" />
      <div className="hpvline hpvline1" />
      <div className="hpvline hpvline2" />
      <div className="hpvline hpvline3" />
      <div className="home-content-container">
        <div className="intro-text">
          <span className="intro-text-normal">Hello,<br />I am </span>
          <span className="intro-text-highlight">Thiago</span>
        </div>
        <div className="subtitle">Full stack & AI developer</div>
      </div>
    </div>
  );
};

export default Home;