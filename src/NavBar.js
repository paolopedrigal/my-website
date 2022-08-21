import './NavBar.css';

export default function NavBar() {
    return (
        <header>
            <nav>
                <ul className="nav-container">
                    <li className="nav-item" id="nav-name">Paolo Pedrigal</li>
                    <li className="nav-item">Skills</li>
                    <li className="nav-item">Experience</li>
                    <li className="nav-item">Projects</li>
                    <li className="nav-item">Resume</li>
                </ul>
            </nav>
        </header>
  
    );
  }