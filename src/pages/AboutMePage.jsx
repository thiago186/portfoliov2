// src/pages/AboutMePage.jsx
import React from 'react';

import Navbar from '../components/Navbar/navbar';
import Title from '../components/Title/Title';

import aboutMeImg from '../assets/aboutme-img.png';

import './AboutMePage.css';


const AboutMePage = () => {

  const aboutMeText = `I am Thiago Amorim, a Machine Learning Software Developer.
  Currently, I develop AI and ML solutions at Suno Research, leveraging Python to drive innovation.
  I have extensive experience creating conversational chatbots using natural language processing with LLMs,
  developing automation systems, and building APIs in Python and Node.js.
  My background includes financial analysis, backoffice operations, and research in portfolio optimization. 
  Skilled in Python, Node.js, C, MySQL, MongoDb, REDIS, Power BI, and other tecnologies.
  I have successfully developed optimization models and dashboards, showcasing my expertise in data analysis and machine learning. I am passionate about using technology to solve real-world problems and drive business value.`


  return (
    <div className='aboutme-page-container'>
      <Navbar />
      <div className='amvline amvline1' />
      <div className='amvline amvline2' />
      <div className='amvline amvline3' />
      <div className='aboutme-card-container'>
        <Title content='About Me' />

        <div className='aboutme-card'>
          <div className='aboutme-card-content'>
            <p className='aboutme-card-text'>{aboutMeText}</p>
          </div>
          <img src={aboutMeImg} className='aboutme-image' />

        </div>
      </div>

    </div>
  );
};

export default AboutMePage;