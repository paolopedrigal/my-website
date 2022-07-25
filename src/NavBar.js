import './NavBar.css';

export default function NavBar() {
    return (
        <header>
            <nav>
                <ul className="nav-container">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About Me</li>
                    <li className="nav-item">Experience</li>
                    <li className="nav-item">Projects</li>
                </ul>
            </nav>
        </header>
  
    );
  }