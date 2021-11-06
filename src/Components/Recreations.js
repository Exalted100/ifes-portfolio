import React from "react"
import Back from "./back"
import "./styles/World-Citizen.css"

const Recreations = () => {
    return (
        <div className="world-citizen-container">
            <Back />
            <h2>MY RECREATIONS</h2>
            <p>In my spare time, I enjoy recreating fun and challenging designs found online. By doing this, I have learnt a lot more about glassmorphism, neumorphism, 3D designs, website UI, Mobile app UI, as well as how to combine colors for certain websites. Here are some of the designs I have recreated.</p>
            <div className="recreation-images-container">
                <div>
                    <img alt="project" src="Food-app.png" />
                </div>
                <div>
                    <img alt="project" src="Desktop.png" />
                </div>
                <div>
                    <img alt="project" src="Art-app.png" />
                </div>
                <div>
                    <img alt="project" src="Glassmorphism.png" />
                </div>
                <div>
                    <img alt="project" src="Power-Up.png" />
                </div>
                <div>
                    <img alt="project" src="card.png" />
                </div>
                <div>
                    <img alt="project" src="Hotelo.png" />
                </div>
                <div>
                    <img alt="project" src="dribbble.png" />
                </div>
            </div>
        </div>
    )
}

export default Recreations