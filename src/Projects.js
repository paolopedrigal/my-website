import './Projects.css';

export default function Projects() {
    return (
        <div id='projects-section'>
            <h2 id='projects-section-title'>Projects</h2>
            <UniversalStudiosProject />
            <ValentinesWordleProject />
        </div>
    );
  }

function UniversalStudiosProject() {
    return (
        <div className='projects-content'>
            <div className='projects-content-title'>
                <a className='projects-content-title-link' href='https://github.com/paolopedrigal/universal-studio-ratings' target="_blank">Predicting Universal Studios Reviews</a>
            </div>
            <p style={{backgroundColor: "transparent", paddingBottom:"20px"}}>
                <span className='projects-content-description-underline'>Description</span>
                <span className='projects-content-description'>: Using a prepared dataset from Kaggle, I performed EDA, 
                pre-processing (text transformation), and built a classifier to predict
                whether a given universal studio review would have a 1-star rating or 
                a 5-star rating.</span>
            </p>
            <p style={{backgroundColor: "transparent", paddingBottom:"50px"}}>
                <span className='projects-content-tech-underline'>tech used</span>
                <span className='projects-content-tech'>: Python, NLTK, Pandas, Jupyter Notebook</span>
            </p>
        </div>
    )
}

function ValentinesWordleProject() {
    return(
        <div className='projects-content'>
            <div className='projects-content-title'>
                <a className='projects-content-title-link' href='https://github.com/paolopedrigal/wordle' target='_blank'>Valentine's Wordle</a>
            </div>
            <p style={{backgroundColor:"transparent", paddingBottom:"20px"}}>
                <span className='projects-content-description-underline'>Description</span>
                <span className='projects-content-description'>: Built a website that mimics New York Times’s Wordle, 
                but customized it to form a sentence that asks the user to be their
                Valentine.</span>
            </p>
            <p style={{backgroundColor:"transparent", paddingBottom:"50px"}}>
                <span className='projects-content-tech-underline'>tech used</span>
                <span className='projects-content-tech'>: React JS, HTML, CSS</span>
            </p>
        </div>
    );
}