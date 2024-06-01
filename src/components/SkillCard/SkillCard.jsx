import React from "react";

import "./SkillCard.css";

const SkillCard = ({ skillName, skillIcon }) => {
    return (
        <div className="skill-card-container">
            <div className="content-container">
                <img src={skillIcon} className="skill-icon" />
                <p className="skill-name">{skillName}</p>
            </div>

        </div>
    );
}

export default SkillCard;