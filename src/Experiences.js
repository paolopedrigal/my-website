import { useState } from "react";

import MCHSImage from './Images/MCHSWideShot.webp';
import StanfordImage from './Images/StanfordDataScience.png';
import UCSBImage from './Images/UCSBDataScience2.png';
import MLioraImage from './Images/MLioraLLCLogo.jpg';
import SkyworksImage from './Images/SkyworksLogo.jpg';
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
        <div id='timeline-section'>
            <h3 id='timeline-title'>Timeline</h3>
            <div id='timeline-content'>
                <div id='before-june-2021'>
                    <img src={MCHSImage} width='300px' alt='A wide shot of Moreau Catholic High School.' className='timeline-content' id='mchs-pic'/>
                    <h3 className='timeline-date' id='may-2018'>May 2018</h3>
                    <p className='timeline-caption' id='mchs-caption'>Graduated from Moreau Catholic High School</p>

                    <img src={StanfordImage} width='300px' alt='Stanford Department of Biomedical Data Science logo.' className='timeline-content' id='stanford-pic'/>
                    <h3 className='timeline-date' id='april-2021'>April 2021</h3>
                    <p className='timeline-caption' id='stanford-caption'>Data Science Mentorship @ Stanford Medicine, Department of Biomedical Data Science</p>
                </div>

                <p className='timeline-date' id='june-2021'>June 2021</p>

                <div id='after-june-2021'>
                    <div id='lhs-after-june-2021'>
                        <p className='timeline-caption' id='ucsb-caption'>Data Science Internship @ University of California, Santa Barbara (Remote)</p>
                        <img src={UCSBImage} width='300px' alt='UCSB Data Science logo.' className='timeline-content' id='ucsb-pic'/>
                        <p className='click-for-details' style={{marginRight: "50px"}}>Click for details.</p>
                        <h3 className='timeline-date' id='june-2022'>June 2022</h3>
                        <div className='timeline-line-break' style={{marginLeft: "91%"}}></div>
                        <p className='timeline-caption' id='skyworks-caption'>Product/Test Engineering Software Internship @ Skyworks Solutions Inc., Irvine, CA</p>
                    </div>
                    <div id='rhs-after-june-2021'>
                        <p className='timeline-caption' id='mliora-caption'>UI Designer/Front-End Developer Internship @ MLiora LLC, San Jose, CA (Remote)</p>
                        <img src={MLioraImage} width='300px' alt='MLiora logo.' className='timeline-content' id='mliora-pic'/>
                        <p className='click-for-details'>Click for details.</p>
                        <img src={SkyworksImage} width='300px' alt='Skyworks logo.' className='timeline-content' id='skyworks-pic'/>
                        <p className='click-for-details'>Click for details.</p>
                    </div>
                </div>        
                <p className='timeline-date' id='present-day'>Present Day</p>
                <p className='timeline-caption' style={{textAlign:"center"}}>Currently, I am building a mobile app that tracks fitness goals!</p>
            </div>
        </div>
            
    );
}

// return (
//     <div id='timeline-section'>
//         <h3 id='timeline-title'>Timeline</h3>
//         <div id='timeline-content'>
//             <div className='timeline-line-break' style={{marginLeft: "48%"}}></div>
//             <div id='before-june-2021'>
//                 <div id='lhs-before-june-2021'>
//                     <h3 className='timeline-date' id='may-2018'>May 2018</h3>
//                     <div className='timeline-line-break' style={{marginLeft: "91%"}}></div>
//                     <p className='timeline-caption' id='mchs-caption'>Graduated from Moreau Catholic High School</p>
//                     <img src={StanfordImage} width='300px' alt='Stanford Department of Biomedical Data Science logo.' className='timeline-content'
//                     id='stanford-pic'/>
//                     <p className='click-for-details' style={{marginRight: "100px"}}>Click for details.</p>
//                 </div>
//                 <div id='rhs-before-june-2021'>
//                     <img src={MCHSImage} width='300px' alt='A wide shot of Moreau Catholic High School.' className='timeline-content' id='mchs-pic'/>
//                     <h3 className='timeline-date' id='april-2021'>April 2021</h3>
//                     <div className='timeline-line-break'></div>
//                     <p className='timeline-caption' id='stanford-caption'>Data Science Mentorship @ Stanford Medicine, Department of Biomedical Data Science</p>
//                 </div>
//             </div>

//             <p className='timeline-date' id='june-2021'>June 2021</p>

//             <div id='after-june-2021'>
//                 <div id='lhs-after-june-2021'>
//                     <p className='timeline-caption' id='ucsb-caption'>Data Science Internship @ University of California, Santa Barbara (Remote)</p>
//                     <img src={UCSBImage} width='300px' alt='UCSB Data Science logo.' className='timeline-content' id='ucsb-pic'/>
//                     <p className='click-for-details' style={{marginRight: "50px"}}>Click for details.</p>
//                     <h3 className='timeline-date' id='june-2022'>June 2022</h3>
//                     <div className='timeline-line-break' style={{marginLeft: "91%"}}></div>
//                     <p className='timeline-caption' id='skyworks-caption'>Product/Test Engineering Software Internship @ Skyworks Solutions Inc., Irvine, CA</p>
//                 </div>
//                 <div id='rhs-after-june-2021'>
//                     <p className='timeline-caption' id='mliora-caption'>UI Designer/Front-End Developer Internship @ MLiora LLC, San Jose, CA (Remote)</p>
//                     <img src={MLioraImage} width='300px' alt='MLiora logo.' className='timeline-content' id='mliora-pic'/>
//                     <p className='click-for-details'>Click for details.</p>
//                     <img src={SkyworksImage} width='300px' alt='Skyworks logo.' className='timeline-content' id='skyworks-pic'/>
//                     <p className='click-for-details'>Click for details.</p>
//                 </div>
//             </div>        
//             <p className='timeline-date' id='present-day'>Present Day</p>
//             <p className='timeline-caption' style={{textAlign:"center"}}>Currently, I am building a mobile app that tracks fitness goals!</p>
//         </div>
//     </div>
        
// );

// function ExperienceSkyworksCard() {
//     return (
//         <div>
//             <div className="experience-header">
//                 <h3>Product/Test Engineering Software Intern | Skyworks Solutions, Inc</h3>
//                 <h4>Irvine, CA</h4>
//                 <h4>June 2022 – August 2022</h4>
//             </div>
//             <ul>
//                 <li>Coded Python scripts to extract information from semiconductor data and to benchmark analytics system</li>
//                 <li>Wrote and updated software documentation</li>
//                 <li>Provided support towards the product/test engineers and other users</li>
//             </ul>
//         </div>
//     )
// }

// function ExperienceUCSBCard() {
//     return (
//         <div>
//             <div className="experience-header">
//                 <h3>Data Science Fellow | University of California, Santa Barbara</h3>
//                 <h4>Goleta, CA (Remote)</h4>
//                 <h4>June 2021 – August 2021</h4>
//             </div>
//             <ul>
//                 <li>Created linear regression models to detect correlations among bee-plant species interactions</li>
//                 <li>Created a multiclass classification model to identify interactions by bee family</li>
//                 <li>Presented findings of patterns using heat maps and world map plots</li>
//                 <li>Cleaned 27 percent of the data collected</li>
//             </ul>
//         </div>
//     );
// }

// function ExperienceMlioraCard() {
//     return (
//         <div>
//             <div className="experience-header">
//                 <h3>UI Designer/Front-End Developer Intern | MLiora</h3>
//                 <h4>San José, CA (Remote)</h4>
//                 <h4>June 2021 – August 2021</h4>
//             </div>
//             <ul>
//                 <li>Designed the wireframes for the login and home screens of the company website</li>
//                 <li>Translated design wireframes into cross-browser website pages in React JS</li>
//                 <li>Built a token-based authentication login</li>
//             </ul>
//         </div>
//     )
// }

export default Timeline;