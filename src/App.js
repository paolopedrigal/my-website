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
  return (
    <div>
      <Front />
      <NavBar />
      <AboutMe />
      <Skills />
      <Timeline />
      <Projects />
      <Footer />
      <Canvas />
    </div>
  );
}

export default App;
