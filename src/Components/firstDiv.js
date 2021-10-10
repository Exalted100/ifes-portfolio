import React from 'react';
import "./styles/firstDiv.css";

const FirstDiv = () => {
    return (
        <>
        <nav className="nav-container">
            <ul className="nav-list">
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className="firstdiv-container">
            <div className="hello">HELLO!</div>
            <div className="intro">I'M IFE</div>
            <div className="role">A UI/UX DESIGNER</div>
        </div>
        <p className="scroll">SCROLL TO VIEW</p>
        </>
    )
}

export default FirstDiv;