import React from "react";
import "./styles/sixthDiv.css";
import BehanceIcon from "../css-assets/behance-icon.png";
import TwitterIcon from "../css-assets/twitter-icon.png";
import LinkedInIcon from "../css-assets/linkedin-icon.png";
import Thanks from "../css-assets/Thanks.jfif"

const SixthDiv = () => {
    return (
        <div className="sixth-div-container" id="contact">
            <h2 className="contact">CONTACT ME</h2>
            <div>
                <div className="contact-container">
                    <p className="question">Have a question or want to work with me? Send a message!</p>
                    <p className="contact-info"><span className="purple-text">Email</span> <a href="mailto: mollytuase@gmail.com">mollytuase@gmail.com</a></p>
                    <p className="contact-info"><span className="purple-text">Socials</span> Below are the links to my socials</p>
                    <a href="https://mobile.twitter.com/ifeisagirl" className="icons-container"><div className="icons-container"><img src={TwitterIcon} alt="" /></div></a>
                    <a href="https://www.behance.net/oguntuaifeoluw" className="icons-container"><i><img src={BehanceIcon} alt="" /></i></a>
                    <a href="https://www.linkedin.com/in/ifeoluwa-oguntuase-779888198/" className="icons-container"><i><img src={LinkedInIcon} alt="" /></i></a>

                    {/* <h3>SAY HELLO!</h3>
                    <form>
                        <input type="text" placeholder="Your full name" />
                        <input type="email" placeholder="Email address" />
                        <textarea placeholder="Your message" />
                        <button>Send</button>
                    </form> */}
                </div>
                <div className="thank-you-container">
                    <img alt="thank you" src={Thanks} />
                </div>
            </div>
        </div>
    )
}

export default SixthDiv