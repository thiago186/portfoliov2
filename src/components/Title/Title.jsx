import React from "react";

import "./Title.css";

const Title = ({content}) => {
    return (
        <div className="title-container">
            <div className="title-content">{content}</div>
        </div>
    )

};

export default Title;