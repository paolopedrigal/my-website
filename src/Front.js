import frontPageImage from './Images/WebsiteFrontPage.jpg' 

function Front() {
    return (
        <div>
            <img src={frontPageImage} width='1000px'/>
            <h1>Paolo Pedrigal</h1>
        </div>
    );
}

export default Front;