import { useState, useRef } from "react";

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
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const handleClick = (ref) => window.scrollTo({top: ref.current.offsetTop, behavior: "smooth"})

  return (
    <div>
      <Front />
      {/* <NavBar /> */}
      <nav>
        <ul className="nav-container">
            <li className="nav-item" id="nav-name" onClick={() => handleClick(aboutMeRef)}>Paolo Pedrigal</li>
            <li className="nav-item" onClick={() => handleClick(skillsRef)}>Skills</li>
            <li className="nav-item" onClick={() => handleClick(experienceRef)}>Experience</li>
            <li className="nav-item" onClick={() => handleClick(projectsRef)}> Projects</li>
            <li className="nav-item">Resume</li>
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
