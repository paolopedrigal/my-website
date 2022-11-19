import { useState } from "react";

import './AboutMe.css'
import mySelfie from './Images/selfie.jpg'

function AboutMe() {

    const [aboutMeContent, setAboutMeContent] = useState(false);

    const adjustContent = () => {
        if (window.innerWidth <= 1200) {
            setAboutMeContent(true);
        }
        else {
            setAboutMeContent(false);
        }
    }

    window.addEventListener("resize", adjustContent);

    return (
        <div className='about'>
            <h2 className={aboutMeContent ? "about-me-title column" : "about-me-title"}>About Me</h2>
            <div className={aboutMeContent ? "about-me-content-container column" : "about-me-content-container"}>
                <img src={mySelfie} alt="selfie" width="300px" className={aboutMeContent ? "about-me-selfie column" : "about-me-selfie"}/>
                <div className={aboutMeContent ? "about-me-text column" : "about-me-text"}>
                    <p id="about-me-text-1">My name is Paolo Pedrigal (he/him) and I am current undergraduate student at University of California, Irvine, majoring in Computer Science. 
                    I am motivated to use my knowledge from my experiences and projects
                    to become a software engineer in website development.</p>
                    <p id="about-me-text-2">Other interests I have are working out, playing basketball and volleyball, and watching movies and TV.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;