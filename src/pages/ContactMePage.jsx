import React from "react";

import Navbar from "../components/Navbar/navbar";

import emailIcon from "/icons/email.svg";
import githubIcon from "/icons/github.svg";
import linkedinIcon from "/icons/linkedin.svg";

import Title from "../components/Title/Title";

import "./ContactMePage.css";

const ContactMePage = () => {

    return (
        <>
            <Navbar />
            <div className='contact-me-title-container'>
                <Title content="Contact Me" />
            </div>

            <div className="contact-cards-grid">
                <div className="contact-card">
                    <img src={linkedinIcon} className="contact-icon" />
                </div>
                <div className="contact-card">
                    <img src={githubIcon} className="contact-icon" />
                </div>
                <div className="contact-card">
                    <img src={emailIcon} className="contact-icon" />
                </div>
            </div>
            <div className='cmpvline cmpvline1' />
            <div className='cmpvline cmpvline2' />
            <div className='cmpvline cmpvline3' />
            <div className='cmphline cmphline1' />
            <div className='cmphline cmphline2' />
            <div className='cmphline cmphline3' />
        </>
    );
}

export default ContactMePage;