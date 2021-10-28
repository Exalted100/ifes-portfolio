import React from "react"
import Back from "./back"
import "./styles/World-Citizen.css"

const WorldCitizen = () => {
    return (
        <div className="world-citizen-container">
            <Back />
            <h2>WORLD CITIZEN DONATION APP</h2>
            <p>During the course of my internship programme, we were required to design an application that would allow people to donate their clothes online, as well as provide information about places or people around them that need clothes.</p>
            <div className="ordinary-image-container">
                <img alt="project" src="First-Picture.png" />
            </div>
            <div className="card-container">
                <h4>My Role</h4>
                <p className="card-para">Sole designer</p>
                <h4>Tools Used</h4>
                <p className="card-para">Figma</p>
                <p className="card-para">Miro</p>
                <p className="card-para">Google Slides</p>
            </div>
            <h3>THE BRIEF</h3>
            <p>World Citizen is an app designed to improve the donation process for people all over Africa. The goals include:</p>
            <ul className="list-container">
                <li>Making it easier for more people to donate their clothes without leaving the comfort of their homes</li>
                <li>Providing information about people and organizations around them who are in need of clothes</li>
                <li>Networking with people in other parts of Africa with similar goals</li>
            </ul>
            <h2>RESEARCH STAGE</h2>
            <h3>INTERVIEWS</h3>
            <p>In the first phase, interviews were carried out with five interviewees. User stories and personas were gathered for the purpose of direction, and a better understanding of users pain points. This led to the approach used in coming up with ideas to tackle the identified problems.</p>
            <div className="ordinary-image-container">
                <img alt="project" src="Empathy-Map.jpg" />
            </div>
            <div className="ordinary-image-container">
                <img alt="project" src="Pain-Points.jpg" />
            </div>
            <h3>INTERVIEW FINDINGS</h3>
            <p>As a result of the interviews, I was able to note certain issues that might arise for users when using the World Citizen app:</p>
            <ul className="list-container">
                <li>Interviewees mentioned that they would not be fully comfortable with someone else is delivering clothes for them. </li>
                <li>This is because they would not be able to confirm that the clothes would actually be delivered.</li>
                <li>They expressed worry over the fact that the pick up person might arrive when they would not be at home.</li>
                <li>Interviewees also pointed out the issue of finding those who  would need their type of clothes.</li>
            </ul>
            <h2>IDEATE STAGE</h2>
            <h3>FOCAL POINTS</h3>
            <p>Based on the research stage, I was able to identify and come up with certain designs that should be included in the website, to ensure that the pain points previously identified were addressed, and also to make it easy for users to navigate. In order for this to happen, I had to identify the questions I would want my design to answer, and provide solutions to these questions.</p>
            <h4>HOW CAN USERS IDENTIFY THOSE IN NEED OF THE TYPE OF CLOTHES THEY WANT TO DONATE?</h4>
            <p>Apart from having a platform that makes it easier for users to donate, how can they be certain of who or where to  give their clothes. How do  I input solutions that provides users with the opportunity to point out the type of clothes they would be donating?</p>
            <h4>HOW CAN USERS CONFIRM THAT THEIR CLOTHES ARE BEING DONATED?</h4>
            <p>For users who have never donated online, and even for those who have, they might have problems believing that the clothes are being sent to those who need them. In designing this app, how do I address this valid concern?</p>
            <h4>HOW DO USERS DONATE WHEN THE CLOTHES ARE TOO MANY TO BE DROPPED OFF?</h4>
            <p>There would be users who prefer checking out the  donation sites close to them on the app, or those that worry that the pick up person might be unable to take all the clothes they want to donate. How do I give them the choice of  alerting the donating organization/pick up driver about the amount of clothes they would be donating?</p>
            <h3>DESIGN SOLUTIONS</h3>
            <h4>DESCRIPTION AND CATEGORY FEATURE</h4>
            <p>This feature allows the users to describe the type of clothes they would be donating. There is also an option for “CATEGORY”  which allows the users to tick the type of clothes they want to donate, whether work clothes, children clothes, etc.</p>
            <h4>NOTIFICATION AND MESSAGE FEATURE</h4>
            <p>With this feature, donors are sent notifications once the clothes have been delivered. They can also be sent messages by the recipients who can confirm that they received the clothes.</p>
            <h4>UPLOAD PICTURE OPTION</h4>
            <p>Users who are worried about the amount of clothes they want to donate have the option to take a picture of the clothes and upload it on the app. This not only helps the person donating, but also the pick up driver. This helps to  provide a visual image of what they would be picking up, and it also helps the donating organization to decide the type of vehicle that would most suitable for the pick up.</p>
            <h4>TRACK DRIVER FEATURE</h4>
            <p>This allows the users to track the pick up drivers assigned to them. For donors who need to know when a driver arrives or is on their way to drop off the clothes, this helps them to do so. This is also useful to the donating organizations in charge of the drivers, as it helps them keep track of the driver’s movements.</p>
            <h3>USER FLOW AND USER JOURNEY MAP</h3>
            <p>After identifying the solutions that should be incorporated into the design, I used Miro for the user flow and user journey map, which gave me a bigger picture of how the screens should be arranged.</p>
            <p className="purple-text">Click to see the full picture.</p>
            <div className="recreation-images-container">
                <img alt="project" src="User-Flow-1.jpg" />
                <img alt="project" src="User-Flow-2.jpg" />
                <img alt="project" src="User-Journey-Map-1.jpg" />
                <img alt="project" src="User-Journey-Map-2.jpg" />
            </div>
            <h3>PROTOTYPE</h3>
            <p>Lo-fi designs were first created, which was later developed into hi-fi designs. Below is the end product of the mobile design.</p>
            <h2 className="fi-prototypes">Lo-Fi Prototype</h2>
            <div className="recreation-images-container">
                <img alt="project" src="Lofi-prototype-1.png" />
                <img alt="project" src="Lofi-prototype-2.png" />
                <img alt="project" src="Lofi-prototype-3.png" />
                <img alt="project" src="Lofi-prototype-4.png" />
            </div>
            <h2 className="fi-prototypes">Hi-Fi Prototype</h2>
            <div className="ordinary-image-container">
                <img alt="project" src="Hifi-Proto-1.png" />
            </div>
            <div className="ordinary-image-container">
                <img alt="project" src="First-Picture.png" />
            </div>
            <div className="ordinary-image-container">
                <img alt="project" src="Hifi-Proto-3.png" />
            </div>
            <div className="ordinary-image-container">
                <img alt="project" src="Hifi-Proto-4.png" />
            </div>
            <div className="ordinary-image-container">
                <img alt="project" src="Hifi-Proto-5.png" />
            </div>
            <h2>REDESIGN OF THE APP</h2>
            <div className="ordinary-image-container">
                <img alt="project" src="World-Citizen-1.png" />
            </div>
            <div className="ordinary-image-container">
                <img alt="project" src="World-Citizen-2.png" />
            </div>
            <div className="ordinary-image-container">
                <img alt="project" src="World-Citizen-3.png" />
            </div>
            <div className="ordinary-image-container">
                <img alt="project" src="World-Citizen-4.png" />
            </div>
            <div className="ordinary-image-container">
                <img alt="project" src="World-Citizen-5.png" />
            </div>
            <h3>SUMMARY</h3>
            <p>Based on my research, I came up with  solutions that I believe will improve the overall user experience of the World Citizen app. My goal was to encourage more people to consider this process of donating, as well as network with several people across the continent.</p>
            <h3>MAJOR TAKEAWAY</h3>
            <p>Taking into consideration that this was my first design vith very limited knowledge of design, I believed that the design needed certain improvements. After working on other apps,and learning about other basics of design, I recreated the World Citizen app. If you would love to see all the pages I designed for the app and a mockup of the design, please <a className="purple-text behance-link" href="https://www.figma.com/file/r5QWDjXtqg7wCfN5MgmqgV/Recreation-of-the-World-Citizen-App?node-id=54%3A428">click here</a>, or check out my behance page <a className="purple-text behance-link" href="https://www.behance.net/oguntuaifeoluw">here</a>.</p>
        </div>
    )
}

export default WorldCitizen