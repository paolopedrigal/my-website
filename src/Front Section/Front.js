import frontPageImage from '../Images/WebsiteFrontPage.jpg';
import './Front.css';

function Front() {
    return (
        <div className="front-container">
            <img id='front-image'src={frontPageImage} alt="Front cover"/>
            <h1 id='front-name'>Paolo Pedrigal</h1>
        </div>
    );
}

export default Front;