import React from "react";
import "./styles/thirdDiv.css";

const ThirdDiv = () => {
    return (
        <div id="skills" className="third-div-container">
            <div>
                <h2>MY EXPERIENCE SO FAR</h2>
                <p>At the start of my journey as a UI/UX designer, I interned with Zuri International, where  I designed an online donation application. I also worked with a team of designers, front end and back end developers to build an online examination app.</p>
                <p>In my spare time, I redesign and recreate websites and apps found online, in order to get constructive comments and improve on myself.</p>
            </div>
            <div>
                <h2>SKILLS</h2>
                <div  className="skills-list-container">
                    <ul>
                        <li>UI/UX</li>
                        <li>User Research</li>                    
                        <li>User Personas</li>                    
                        <li>User Flows</li>                    
                        <li>User Journey Mapping</li>                    
                        <li>Wireframing</li>                    
                        <li>Prototyping</li>
                    </ul>
                    <ul>
                        <li>Responsive Design</li>
                        <li>Interactive Design</li>
                        <li>Typography</li>
                        <li>Figma</li>
                        <li>Miro</li>
                        <li>Invision</li>
                    </ul>
                </div>
            </div>
            {/* <div>
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
            </div> */}
        </div>
    );
}

export default ThirdDiv;