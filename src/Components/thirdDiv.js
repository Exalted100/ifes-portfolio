import React from "react";
import "./styles/thirdDiv.css";

const ThirdDiv = () => {
    return (
        <div className="third-div-container">
            <div>
                <h2>MY EXPERIENCE SO FAR</h2>
                <p>At the start of my journey as a UI/UX designer, I interned with Zuri International, where  I designed an online donation application. I also worked with a team of designers, front end and back end developers to build an online examination app.</p>
                <p>In my spare time, I redesign and recreate websites and apps found online, in order to get constructive comments and improve on myself.</p>
            </div>
            <div>
                <h2>SKILLS</h2>
                <div className="skill-container">
                    <p className="skill">UI/UX</p>
                    <p className="skill">Figma</p>
                </div>
                <div>
                    <p className="skill">User Research</p>
                </div>
                <div className="skill-container">
                    <p className="skill">Usability testing</p>
                    <p className="skill">Wireframing</p>
                </div>
            </div>
        </div>
    );
}

export default ThirdDiv;