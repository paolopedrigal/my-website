import './AboutMe.css'
import mySelfie from './Images/selfie.jpg'


function AboutMe() {
    return (
        <div className='about'>
            <h2 id='about-me-section-title'>About Me</h2>
            <AboutMeBackgroundObjective />
            <AboutMeSkills />
        </div>
    );
}

function AboutMeBackgroundObjective() {
    return (
        <div>
            <h3 id='background-objective-title'>Background & Objective</h3>
            <div className='background-content-container'>
                <img src={mySelfie} alt="selfie" width="300px" id='background-selfie'/>
                <div className="background-text">
                    <p id="background-text-1">My name is Paolo Pedrigal (he/him) and I am current undergraduate student at University of California, Irvine, majoring in Computer Science. 
                    I am motivated to use my knowledge from my experiences and projects
                    to become a software engineer in website development.</p>
                    <p id="background-text-2">Other interests I have are working out, playing basketball and volleyball, and watching movies and TV.</p>
                </div>
            </div>
        </div>
    )
}

function AboutMeSkills() {
    return (
        <div>
            <h3 id='skills-title'>Skills</h3>
            <ul className='skills-filter'>
                <li>Programming Languages</li>
                <li>Front-End</li>
                <li>Back-End</li>
                <li>Data Science</li>
                <li>Team-oriented Tech</li>
            </ul>
            <ul className='skills'>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node JS</li>
                <li>Figma</li>
                <li>PostgreSQL</li>
                <li>Cassandra</li>
                <li>PyMongo</li>
                <li>Neo4j</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
                <li>Numpy</li>
                <li>Sci-kit Learn</li>
                <li>NLTK</li>
                <li>R</li>
                <li>Bash</li>
                <li>Zoom</li>
                <li>GitHub</li>
                <li>Microsoft Excel</li>
                <li>Slack</li>
            </ul>
        </div>
    );
}

// function AboutMeEducation() {
//     return (
//         <div>
//             <h3>Education</h3>
//             <div>
//                 <b>Univeristy of California, Irvine</b>
//                 <b>Degree Expected: June 2023</b>
//                 <b>Bachelors of Science, Computer Science</b>
//                 <ul>
//                     <li>Recipent of the Regents Scholarship</li>
//                     <li>Relevant Coursework: 
//                     Design/Analysis of Algorithms, 
//                     Data Structures & Abstraction, 
//                     Introduction to Probability & Statistics, 
//                     Methodologies of Data Visualization, 
//                     Data Management, 
//                     Information Retrieval
//                     </li>
//                 </ul>
//             </div>
//         </div>
        
//     )
// }


export default AboutMe;