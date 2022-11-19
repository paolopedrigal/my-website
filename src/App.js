import {useRef } from "react";

import Front from './Front.js';
import NavBar from './NavBar.js';
import AboutMe from './AboutMe.js';
import Skills from './Skills.js';
import Timeline from './Experiences.js';
import Projects from './Projects.js';
import Footer from './Footer.js';

import Canvas from "./Canvas.js";
import './App.css';

function App() {

  const aboutMeRef = useRef(null);
  const aboutMeNavRef = useRef(null);
  const skillsRef = useRef(null);
  const skillsNavRef = useRef(null);
  const experienceRef = useRef(null);
  const experienceNavRef = useRef(null);
  const projectsRef = useRef(null);
  const projectsNavRef = useRef(null);
  const resumeNavRef = useRef(null);
  const handleClick = (ref) => window.scrollTo({top: ref.current.offsetTop, behavior: "smooth"});
  const hoverEnterGrey = (ref) => { ref.current.style.color = "#D9D9D9"; };
  const hoverLeaveWhite = (ref) => { ref.current.style.color = "white"; };
  const hoverEnterYellow = (ref) => { ref.current.style.color = "#fdfec2"; };
  const hoverLeaveYellow = (ref) => { ref.current.style.color = "#FCFF50"; };


  return (
    <div>
      <Front />
      {/* <NavBar /> */}
      <nav>
        <ul className="nav-container">
            <li className="nav-item" id="nav-name" onMouseEnter={() => hoverEnterYellow(aboutMeNavRef)} onMouseLeave={() => hoverLeaveYellow(aboutMeNavRef)}
              onClick={() => handleClick(aboutMeRef)} ref={aboutMeNavRef}>Paolo Pedrigal
            </li>
            <li className="nav-item" onMouseEnter={() => hoverEnterGrey(skillsNavRef)}  onMouseLeave={() => hoverLeaveWhite(skillsNavRef)}
              onClick={() => handleClick(skillsRef)} ref={skillsNavRef}>Skills
            </li>
            <li className="nav-item" onMouseEnter={() => hoverEnterGrey(experienceNavRef)} onMouseLeave={() => hoverLeaveWhite(experienceNavRef)}
              onClick={() => handleClick(experienceRef)} ref={experienceNavRef}>Experience
            </li>
            <li className="nav-item" onMouseEnter={() => hoverEnterGrey(projectsNavRef)} onMouseLeave={() => hoverLeaveWhite(projectsNavRef)}
              onClick={() => handleClick(projectsRef)} ref={projectsNavRef}>Projects
            </li>
            <li className="nav-item" onMouseEnter={() => hoverEnterGrey(resumeNavRef)} onMouseLeave={() => hoverLeaveWhite(resumeNavRef)}
              ref={resumeNavRef}>Resume
            </li>
        </ul>
      </nav>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={skillsRef}>
        <Canvas />
      </div>
      {/* <Skills /> */}
      <div ref={experienceRef}>
        <Timeline />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
