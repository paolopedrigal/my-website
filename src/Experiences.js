import MCHSImage from './Images/MCHSWideShot.webp';
import StanfordImage from './Images/StanfordDataScience.png';
import UCSBImage from './Images/UCSBDataScience.png';
import MLioraImage from './Images/MLioraLLCLogo.jpg';
import SkyworksImage from './Images/SkyworksLogo.jpg';
import './Experiences.css';

function Timeline() {
    return (
        <div id='timeline-section'>
            <h3 id='timeline-title'>Timeline</h3>
            <div id='timeline-content'>
                <div>
                    <span className='placeholder'></span>
                    <span className='timeline-end-line'></span>
                </div>
                <div id='before-june-2021'>
                    <div id='lhs-before-june-2021'>
                        <div id='above-line-lhs-before-june-2021'>
                            <h3 className='timeline-date'>May 2018</h3>
                        </div>
                        <div id='below-line-lhs-before-june-2021'>
                            <p className='timeline-caption'>Graduated from Moreau Catholic High School.</p>
                            <img src={StanfordImage} width='300px' alt='Stanford Department of Biomedical Data Science logo.' className='timeline-content'
                            id='Stanford'/>
                            <p className='click-for-details'>Click for details.</p>
                        </div>
                    </div>
                    <div id='rhs-before-june-2021'>
                        <div id='above-line-rhs-before-june-2021'>
                            <img src={MCHSImage} width='300px' alt='A wide shot of Moreau Catholic High School.' className='timeline-content' id='MCHS'/>
                            <h3 className='timeline-date'>April 2021</h3>
                        </div>
                        <div id='below-line-rhs-before-june-2021'>
                            <p className='timeline-caption'>Data Science Mentorship @ Stanford Medicine, Department of Biomedical Data Science</p>
                        </div>
                    </div>
                </div>
                
                <p id='june-2021'>June 2021</p>

                <div id='after-june-2021'>
                    <div id='lhs-after-june-2021'>
                        <div id='above-line-lhs-after-june-2021'></div>
                        <div id='below-line-lhs-after-june-2021'></div>
                    </div>
                    <div id='rhs-after-june-2021'></div>
                </div>
                {/* 
                <UCSB className='timeline-content'/>
                <MLiora className='timeline-content'/>
                <Skyworks className='timeline-content'/>
                <PresentDay/> Added the className timeline-content to the functional component itself */}
            </div>

        </div>
            
    );
}

function UCSB() {
    return (
        <img src={UCSBImage} width='300px' alt='UCSB Data Science logo.' className='timeline-content' id='UCSB'/>
    );
}

function MLiora() {
    return (
        <img src={MLioraImage} width='300px' alt='MLiora logo.' className='timeline-content' id='MLiora'/>
    );
}

function Skyworks() {
    return (
        <img src={SkyworksImage} width='300px' alt='Skyworks logo.' className='timeline-content' id='Skyworks'/>
    );
}

function PresentDay() {
    return (
            <p id='present-day'>Present Day</p>
    )
}

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