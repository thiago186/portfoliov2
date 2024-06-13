import React from "react";

import ExperienceTag from "../ExperienceTag/ExperienceTag";

import "./ProjectCard.css";

function ProjectCard({ project }) {
    return (
        <div className="project-card-container">
            <div clasName="project-card-image-container">
                <img className="project-card-image" src={project.imageUrl} alt="project" />
            </div>

            <div className="project-card-text-container">
                <h2 className="project-card-title">{project.title}</h2>
                <div className="project-card-description">{project.description}</div>
                <div className="project-card-tags-container">
                    {project.tags.map((tag, index) => (
                        <ExperienceTag key={index} tagName={tag}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
