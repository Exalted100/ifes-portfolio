import React from "react";
import "./styles/fourthDiv.css";
import Project from "./project";
import Recreations from "../css-assets/Recreations.png"
import Examinarr from "../css-assets/Examinarr.png"
import WorldCitizenApp from "../css-assets/World-Citizen-App.png"

const FourthDiv = () => {
    return (
        <div className="fourth-div-container" id="work">
            <h2>MY WORKS</h2>
            <Project name="World Citizen App" link="/world-citizen" backgroundImage={WorldCitizenApp} />
            <Project name="Examinrr Web and Mobile Design" link="/examinar" backgroundImage={Examinarr} />
            <Project name="My Recreations" link="/recreations" backgroundImage={Recreations} />
        </div>
    )
}

export default FourthDiv;