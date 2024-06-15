// src/pages/Projects.jsx
import React from 'react';

import Title from '../components/Title/Title';
import ProjectCard from '../components/ProjectCard/ProjectCard';

import Navbar from '../components/Navbar/navbar';

import './ProjectsPage.css';

import projectImg from '/images/project-placeholder.png';

const ProjectsPage = () => {

  let projects = {
    project1: {
      "title": "Project 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
      "tags": ["BackEnd", "FrontEnd", "MongoDb"],
      imageUrl: projectImg
    },
    project2: {
      "title": "Project 2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
      "tags": ["BackEnd", "FrontEnd", "MongoDb"],
      imageUrl: projectImg
    },
    project3: {
      "title": "Project 3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
      "tags": ["BackEnd", "FrontEnd", "MongoDb"],
      imageUrl: projectImg
    }
  }



  return (
    <>
      <div className="pjpvline pjpvline1" />
      <div className="pjpvline pjpvline2" />
      <div className="pjpvline pjpvline3" />
      <Navbar />
      <div className='projects-page-container'>
        <Title content="Projects" className='projects-title-container' />
        <div className='projects-grid-container'>
          <ProjectCard project={projects.project1} />
          <ProjectCard project={projects.project2} />
          <ProjectCard project={projects.project3} />
        </div>
      </div>
      <div className="pjphline pjphline1" />
      <div className="pjphline pjphline2" />
      <div className="pjphline pjphline3" />
    </>

  );
};

export default ProjectsPage;