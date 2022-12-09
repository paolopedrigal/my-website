import { useState, useRef, useEffect } from "react";

import MCHSImage from './Images/MCHSWideShot2.jpg';
import StanfordImage from './Images/StanfordDataScience.jpg';
import UCSBImage from './Images/UCSBDataScience2.png';
import MLioraImage from './Images/MLioraLLCLogo.jpg';
import SkyworksImage from './Images/SkyworksLogo2.jpg';
import './Experiences.css';

function Timeline() {

    const [experiencesContent, setExperiencesContent] = useState(false);

    const mchsRef = useRef(null);
    const stanfordRef = useRef(null);
    const ucsbRef = useRef(null);
    const mlioraRef = useRef(null);
    const skyworksRef = useRef(null);
    const presentDayRef = useRef(null);
    const refs = [mchsRef, stanfordRef, ucsbRef, mlioraRef, skyworksRef, presentDayRef];

    const adjustContent = () => {
        if (window.innerWidth <= 1200) {
            setExperiencesContent(true);
        }
        else {
            setExperiencesContent(false);
        }
    }

    window.addEventListener("resize", adjustContent);



    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            })
        });

        refs.forEach((ref) => {observer.observe(ref.current)});
    }, refs);

    return (
        <div className='timeline-section'>
            <h3 className='timeline-title'>Timeline</h3>
            <div className='timeline-content'>


                <div className="experience" ref={mchsRef}>
                    <img src={MCHSImage} alt='A wide shot of Moreau Catholic High School.' className='timeline-pic' id="MCHS-pic"/>
                    <h3 className='timeline-date'>May 2018</h3>
                    <p className='timeline-caption'>Graduated from Moreau Catholic High School</p>
                </div>


                <div className='timeline-line'>
                    <div className='line'></div>
                    <div></div>
                </div>

                <div className="experience" ref={stanfordRef}>
                    <img src={StanfordImage} alt='Stanford Department of Biomedical Data Science logo.' className='timeline-pic'/>
                    <h3 className='timeline-date'>April 2021</h3>
                    <p className='timeline-caption'>Data Science Mentorship</p>
                    <p className='timeline-caption location' id='stanford-caption'>@ Stanford Medicine, Department of Biomedical Data Science</p>
                </div>

            
                <div className='timeline-line'>
                    <div className='line'></div>
                    <div></div>
                </div>

                <div className="experience" ref={ucsbRef}>
                    <img src={UCSBImage} alt='UCSB Data Science logo.' className='timeline-pic'/>
                    <p className='timeline-date'>June 2021</p>
                    <p className='timeline-caption'>Data Science Internship</p> 
                    <p className='timeline-caption location' id='ucsb-caption'>@ University of California, Santa Barbara (Remote)</p>
                </div>


                <div className='timeline-line'>
                    <div className='line'></div>
                    <div></div>
                </div>

                <div className="experience" ref={mlioraRef}>
                    <img src={MLioraImage} width='300px' alt='MLiora logo.' className='timeline-pic'/>
                    <p className='timeline-date'>June 2021</p>
                    <p className='timeline-caption'>UI Designer/Front-End Developer Internship</p>
                    <p className='timeline-caption location' id='mliora-caption'>@ MLiora LLC, San Jose, CA (Remote)</p>
                </div>


                <div className='timeline-line'>
                    <div className='line'></div>
                    <div></div>
                </div>

                <div className="experience" ref={skyworksRef}>
                    <img src={SkyworksImage} width='300px' alt='Skyworks logo.' className='timeline-pic'/>
                    <h3 className='timeline-date'>June 2022</h3>
                    <p className='timeline-caption'>Product/Test Engineering Software Internship</p>
                    <p className='timeline-caption location' id='skyworks-caption'>@ Skyworks Solutions Inc., Irvine, CA</p>
                </div>


                <div className='timeline-line'>
                    <div className='line'></div>
                    <div></div>
                </div>  

                <div className="experience" ref={presentDayRef}>
                    <p className='timeline-date' id='present-day'>Present Day</p>
                    <p className='timeline-caption' style={{textAlign:"center"}}>Currently, I am building a mobile app that tracks fitness goals!</p>
                </div>

            </div>
        </div>
            
    );
}

export default Timeline;