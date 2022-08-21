import './AboutMe.css'
import mySelfie from './Images/selfie.jpg'

function AboutMe() {
    return (
        <div className='about'>
            <h2 id='about-me-title'>About Me</h2>
            <div className='about-me-content-container'>
                <img src={mySelfie} alt="selfie" width="300px" id='about-me-selfie'/>
                <div className="about-me-text">
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