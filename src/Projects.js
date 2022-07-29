export default function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <ProjectPredictingReviews />
        </div>
    );
  }

function ProjectPredictingReviews() {
    return (
        <div>
            <h3>Predicting Universal Studios Reviews</h3>
            <ul>
                <li>Conducted exploratory data analysis on a Universal Studios ratings dataset to see the frequency of reviews over a seasonal period and to see which Universal Studios branches yielded higher-rated reviews versus lower-rated reviews</li>
                <li>Used Python’s NLTK library for NLP to preprocess unstructured</li>
                <li>Modeled a Multinomial Naive Bayes classifier that would predict 1-star or 5-star reviews</li>
            </ul>
        </div>
    )
}