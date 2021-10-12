import React from "react";
import "./styles/sixthDiv.css";

const SixthDiv = () => {
    return (
        <div className="sixth-div-container">
            <h2 className="contact">CONTACT ME</h2>
            <div>
                <div className="contact-container">
                    <p>Have a question or want to work with me? Send a message!</p>
                    <p><span className="purple-text">Email</span> <a href="mailto: mollytuase@gmail.com">mollytuase@gmail.com</a></p>
                    <p><span className="purple-text">Socials</span> Below are the links to my socials</p>

                    <h3>SAY HELLO!</h3>
                    <form>
                        <input type="text" placeholder="Your full name" />
                        <input type="email" placeholder="Email address" />
                        <textarea placeholder="Your message" />
                        <button>Send</button>
                    </form>
                </div>
                <div className="thank-you-container">
                    <img alt="thank you" src="" />
                </div>
            </div>
        </div>
    )
}

export default SixthDiv