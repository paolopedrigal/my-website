import './Footer.css';

export default function Footer() {
    return(
        <div className='footer-section'>
            <div style={{backgroundColor:"transparent"}}>
                <ul className='contact-list'>
                    <li id='contact-me-via'>Contact Me via...</li>
                    <li className='contact-link-container'>
                        <a href="https://linkedin.com/in/paolopedrigal" target="_blank" className='contact-link'>LinkedIn</a>
                    </li>
                    <li className='contact-link-container'>
                        <a href="https://github.com/paolopedrigal" target="_blank" className='contact-link'>GitHub</a>
                    </li>
                    <li className='contact-link-container'>
                        <a href="mailto:paolopedrigal@gmail.com" target="_blank" className='contact-link'>Email</a>
                    </li>
                </ul>
            </div>
            <h3 id='created-by-paolo-pedrigal'>Created by Paolo Pedrigal.</h3>
        </div>
    );
}
