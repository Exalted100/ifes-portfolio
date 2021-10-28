import React from "react"
import "./styles/project.css"
import { Link } from "react-router-dom";
import ProjectPic from "../css-assets/ife-image.jpg"

const Project = ({ link, name, backgroundImage=ProjectPic }) => {

    return (
        <div className="project-container">
            <p style={{ background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%), url(${backgroundImage})`, backgroundSize: "cover" }}>{ name }</p>
            <Link to={link}>View</Link>
        </div>
    )
}

export default Project