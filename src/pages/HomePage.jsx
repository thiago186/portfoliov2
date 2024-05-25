// src/pages/Home.jsx
import React from 'react';

import Navbar from '../components/Navbar/navbar';

import './HomePage.css'; // Make sure to create this CSS file

const Home = () => {
  return (
    <div className="home-container">
      < Navbar />
      <div className="hline hline1" />
      <div className="hline hline2" />
      <div className="hline hline3" />
      <div className="vline vline1" />
      <div className="vline vline2" />
      <div className="vline vline3" />
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