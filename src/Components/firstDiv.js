import React from 'react';
import "./styles/firstDiv.css";

const FirstDiv = () => {
    return (
        <>
            <nav className="nav-container">
                <ul className="nav-list">
                    <li><a className="nav-link" href="#about">About</a></li>
                    <li><a className="nav-link" href="#skills">Skills</a></li>
                    <li><a className="nav-link" href="#work">Work</a></li>
                    <li><a className="nav-link" href="#resume">Resume</a></li>
                    <li><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="firstdiv-container">
                <div className="hello">HELLO!</div>
                <div className="intro">I'M IFE</div>
                <div className="role">A PRODUCT DESIGNER</div>
            </div>
            <p className="scroll">SCROLL TO VIEW</p>
        </>
    )
}

export default FirstDiv;