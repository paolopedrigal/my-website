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
      <Canvas />
      {/* <Skills /> */}
      <Timeline />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
