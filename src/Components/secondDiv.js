import React from "react";
import "./styles/secondDiv.css";

const SecondDiv = () => {
    return(
        <div className="second-div-container" id="about">
            <div>
                <h2>A LITTLE ABOUT ME</h2>
                <p>Hi! I’m Ife, a <span className="purple-text">UI/UX designer</span> living in Lagos, <span className="purple-text">Nigeria</span>. As a law student who recently transtioned into the tech world, I consider it important to continuously teach myself about the whole process that goes into designing. I have a good grasp of how to combine user research, wireframing, prototyping, typography and great color schemes to ensure that users have a <span className="purple-text">user-friendly</span>, <span className="purple-text">easy</span> and <span className="purple-text">exciting</span> experience throughout their journey on an app or website.</p>
                <p>I also enjoy connecting with other creatives on social media, which helps to keep me inspired and motivated.</p>
                <p>When I’m not designing or trying to pass my law exams, I enjoy volunteer work for mental health, and I also enjoy crocheting.</p>
            </div>
            <div>
                <div className="superset">
                    <div className="subset"></div>
                    <img className="ife-image" alt="Ifeoluwa" src="ife-image.jpg" />
                </div>
            </div>
        </div>
    )
}

export default SecondDiv;