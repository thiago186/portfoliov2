// src/pages/Projects.jsx
import React from 'react';

import Title from '../components/Title/Title';
import ProjectCard from '../components/ProjectCard/ProjectCard';

import projectImg from '/images/project-placeholder.png';

const ProjectsPage = () => {

  let project1 = {
    "title": "Project 1",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    "tags": ["BackEnd", "FrontEnd", "MongoDb"],
    imageUrl: projectImg
  }


  return (
    <div>
      <Title content="Projects" className='projects-title-container' />
      <div className='projects-grid-container'>
        <ProjectCard project={project1}/>
      </div>
    </div>
  );
};

export default ProjectsPage;