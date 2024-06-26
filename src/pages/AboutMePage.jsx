// src/pages/AboutMePage.jsx
import React from 'react';
import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar/navbar';
import Title from '../components/Title/Title';
import Ellipse from '../components/Ellipse/Ellipse';
import ExperienceTag from '../components/ExperienceTag/ExperienceTag';
import SkillCard from '../components/SkillCard/SkillCard';

import aboutMeImg from '/aboutme-img.png';
import pythonIcon from '/skillsIcons/python.png';
import javascriptIcon from '/skillsIcons/javascript.png';
import nodejsIcon from '/skillsIcons/nodejs.png';
import githubIcon from '/skillsIcons/github.png';
import htmlIcon from '/skillsIcons/html.png';
import gitIcon from '/skillsIcons/git.png';
import cssIcon from '/skillsIcons/css.png';
import redisIcon from '/skillsIcons/redis.png';

import './AboutMePage.css';


const AboutMePage = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth < 800) {
        console.log('is mobile!')
      }
      setIsMobile(window.innerWidth < 800);
    }

    handleSize();
    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  const aboutMeText = `I'm Thiago, a full stack & machine learning software developer.
  Currently, I develop AI and ML solutions at Suno Research, leveraging Python to drive innovation.
  I have extensive experience creating conversational chatbots using natural language processing with LLMs,
  developing automation systems, and building APIs in Python and Node.js.
  My background includes financial analysis, backoffice operations, and research in portfolio optimization. 
  Skilled in Python, Node.js, C, MySQL, MongoDb, REDIS, Power BI, and other tecnologies.
  I have successfully developed optimization models and dashboards, showcasing my expertise in data analysis and machine learning. I am passionate about using technology to solve real-world problems and drive business value.`

  const mobileAboutMeText = `Hi! I’m Thiago, an ML Developer at Suno Research.
  I craft AI/ML solutions with Python, focusing on chatbots, automation, and APIs.
  Passionate about using tech to tackle real-world challenges and add business value.
  Skilled in Python, Node.js, C, MySQL, MongoDB, REDIS, and Power BI.`


  return (
    <>
      <div className='aboutme-page-container'>
        <Navbar />
        <div className='amvline amvline1' />
        <div className='amvline amvline2' />
        <div className='amvline amvline3' />

        <div className='aboutme-card-container'>
          <Title content='About Me' />

          <div className='aboutme-card'>
            {isMobile ? (
              <>
                <img src={aboutMeImg} className='aboutme-image' />
                <div className='aboutme-card-content'>
                  <p className='aboutme-card-text'>{mobileAboutMeText}</p>
                </div>
              </>
            ) : (
              <>
                <div className='aboutme-card-content'>
                  <p className='aboutme-card-text'>{aboutMeText}</p>
                </div>
                <img src={aboutMeImg} className='aboutme-image' />
              </>
            )}
          </div>
        </div>

        <div className="experiences-section-container">
          <Title content="Experience" />
          <div className="experiences-container">
            <div className="single-experience-container">
              <Ellipse />
              {/* <div className="ellipse-connection-line enabled" /> */}
              <div className='about-experience-container'>
                <div className='about-experience-text-content'>
                  <div className="experience-title">Artificial Intelligence & Machine Learning Developer @ Suno Research</div>
                  <div className="experience-period"> Jun/23 - moment</div>
                  <div className="experience-description">Development of conversational AI applications powered by LLMs to help support team.</div>
                </div>
                <div className="experience-field-container">
                  <ExperienceTag tagName="AI" />
                  <ExperienceTag tagName="Machine Learning" />
                  <ExperienceTag tagName="REDIS" />
                  <ExperienceTag tagName="Python" />
                  <ExperienceTag tagName="Node.js" />
                </div>
              </div>
            </div>

            <div className="single-experience-container">
              <Ellipse />
              {/* <div className="ellipse-connection-line enabled" /> */}
              <div className='about-experience-container'>
                <div className='about-experience-text-content'>
                  <div className="experience-title">Asset Management Backoffice Operations @ Suno Asset</div>
                  <div className="experience-period"> Ago/22 - Jun/23</div>
                  <div className="experience-description">Developed automation solutions and utilized third-party APIs to integrate systems, perform calculations, and generate reports.</div>
                </div>
                <div className="experience-field-container">
                  <ExperienceTag tagName="AI" />
                  <ExperienceTag tagName="Machine Learning" />
                  <ExperienceTag tagName="REDIS" />
                  <ExperienceTag tagName="Python" />
                  <ExperienceTag tagName="Node.js" />
                </div>
              </div>
            </div>

            <div className="single-experience-container">
              <Ellipse />
              {/* <div className="ellipse-connection-line enabled" /> */}
              <div className='about-experience-container'>
                <div className='about-experience-text-content'>
                  <div className="experience-title">Research Student on Operational Research @ GREEFO - UFPE</div>
                  <div className="experience-period"> Apr/19 - Jan/23</div>
                  <div className="experience-description">Research on portfolio index tracking optimization models, comparing the performance of CPLEX solutions and Genetic Algorithms.</div>
                </div>
                <div className="experience-field-container">
                  <ExperienceTag tagName="AI" />
                  <ExperienceTag tagName="Machine Learning" />
                  <ExperienceTag tagName="REDIS" />
                  <ExperienceTag tagName="Python" />
                  <ExperienceTag tagName="Node.js" />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="skills-section-container last-element">
          <Title content="Skills" />
          <div className="skills-grid">
            <SkillCard skillName="Python" skillIcon={pythonIcon} />
            <SkillCard skillName="Javascript" skillIcon={javascriptIcon} />
            <SkillCard skillName="Node.js" skillIcon={nodejsIcon} />
            <SkillCard skillName="Github" skillIcon={githubIcon} />
            <SkillCard skillName="HTML" skillIcon={htmlIcon} />
            <SkillCard skillName="Git" skillIcon={gitIcon} />
            <SkillCard skillName="CSS" skillIcon={cssIcon} />
            <SkillCard skillName="REDIS" skillIcon={redisIcon} className="last-row-skill" />
          </div>
        </div>
      </div>
      <div className='amhline amhline1' />
      <div className='amhline amhline2' />
      <div className='amhline amhline3' />
    </>
  );
};

export default AboutMePage;