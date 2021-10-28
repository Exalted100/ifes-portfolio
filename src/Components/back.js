import React from "react"
import { Link } from "react-router-dom";
import "./styles/back.css"

const Back = () => {
    return (
        <div className="back-container">
            <Link to="/" className="back-link" >&#8592; Back</Link>
        </div>
    )
}

export default Back