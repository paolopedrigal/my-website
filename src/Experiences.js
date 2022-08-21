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
            <MCHS />
            <Stanford className='timeline-content'/>
            <UCSB className='timeline-content'/>
            <MLiora className='timeline-content'/>
            <Skyworks className='timeline-content'/>
            <PresentDay/> {/* Added the className timeline-content to the functional component itself*/}
        </div>

    );
}

function MCHS() {
    return (
        <img src={MCHSImage} width='300px' alt='A wide shot of Moreau Catholic High School.' className='timeline-content' id='MCHS'/>
    );
}

function Stanford() {
    return (
        <img src={StanfordImage} width='300px' alt='Stanford Department of Biomedical Data Science logo.' className='timeline-content'
        id='Stanford'/>
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