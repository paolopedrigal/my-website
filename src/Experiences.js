import { useState } from "react";

import MCHSImage from './Images/MCHSWideShot2.jpg';
import StanfordImage from './Images/StanfordDataScience.jpg';
import UCSBImage from './Images/UCSBDataScience2.png';
import MLioraImage from './Images/MLioraLLCLogo.jpg';
import SkyworksImage from './Images/SkyworksLogo2.jpg';
import './Experiences.css';

function Timeline() {

    const [experiencesContent, setExperiencesContent] = useState(false);

    const adjustContent = () => {
        if (window.innerWidth <= 1200) {
            setExperiencesContent(true);
        }
        else {
            setExperiencesContent(false);
        }
    }

    window.addEventListener("resize", adjustContent)

    return (
        <div className='timeline-section'>
            <h3 className='timeline-title'>Timeline</h3>
            <div className='timeline-content'>

                <img src={MCHSImage} alt='A wide shot of Moreau Catholic High School.' className='timeline-pic'/>
                <h3 className='timeline-date'>May 2018</h3>
                <p className='timeline-caption'>Graduated from Moreau Catholic High School</p>

                <img src={StanfordImage} alt='Stanford Department of Biomedical Data Science logo.' className='timeline-pic'/>
                <h3 className='timeline-date'>April 2021</h3>
                <p className='timeline-caption'>Data Science Mentorship @ Stanford Medicine, Department of Biomedical Data Science</p>
            

                <img src={UCSBImage} alt='UCSB Data Science logo.' className='timeline-pic'/>
                <p className='timeline-date' id='june-2021'>June 2021</p>
                <p className='timeline-caption'>Data Science Internship @ University of California, Santa Barbara (Remote)</p>

                <img src={MLioraImage} width='300px' alt='MLiora logo.' className='timeline-pic'/>
                <p className='timeline-date' id='june-2021'>June 2021</p>
                <p className='timeline-caption' id='mliora-caption'>UI Designer/Front-End Developer Internship @ MLiora LLC, San Jose, CA (Remote)</p>

                <img src={SkyworksImage} width='300px' alt='Skyworks logo.' className='timeline-pic'/>
                <h3 className='timeline-date'>June 2022</h3>
                <p className='timeline-caption'>Product/Test Engineering Software Internship @ Skyworks Solutions Inc., Irvine, CA</p>

                <p className='timeline-date' id='present-day'>Present Day</p>
                <p className='timeline-caption' style={{textAlign:"center"}}>Currently, I am building a mobile app that tracks fitness goals!</p>
            </div>
        </div>
            
    );
}

export default Timeline;