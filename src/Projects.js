export default function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <UniversalStudiosProject />
            <ValentinesWordleProject />
        </div>
    );
  }

function UniversalStudiosProject() {
    return (
        <div>
            <h3>Predicting Universal Studios Reviews</h3>
            <p>Description: Using a prepared dataset from Kaggle, I performed EDA, 
            pre-processing (text transformation), and built a classifier to predict
            whether a given universal studio review would have a 1-star rating or 
            a 5-star rating.</p>
            <p>tech used: Python, NLTK, Pandas, Jupyter Notebook</p>
        </div>
    )
}

function ValentinesWordleProject() {
    return(
        <div>
            <h3>Valentine's Wordle</h3>
            <p>Description: Built a website that mimics New York Times’s Wordle, 
            but customized it to form a sentence that asks the user to be their
            Valentine.</p>
            <p>tech used: React JS, HTML, CSS</p>
        </div>
    );
}