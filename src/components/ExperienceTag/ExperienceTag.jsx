import React from "react";

import "./ExperienceTag.css";

const ExperienceTag = ({ tagName }) => {
    return (
        <div className="experience-tag">
            <p className="experience-tag-content">{tagName}</p>
        </div>
    );
}

export default ExperienceTag;
