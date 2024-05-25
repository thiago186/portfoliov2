import React from "react";

import "./NavButton.css";

export const NavButton = ({ icon, label, selected }) => {
    

    return (
        <div className='navbutton-container'>
            <div className="icon-container">
                <div className={`state-layer ${selected ? 'selected': ''}`}>
                    <img src={icon} className="svg-navicon"/>
                </div>
                <span className="navbutton-label">{label}</span>
            </div>
        </div>
    );
};

export default NavButton;