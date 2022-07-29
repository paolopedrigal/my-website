export default function Experiences() {
    return (
        <div>
            <h2>Experiences</h2>
            <ExperienceSkyworks />
            <ExperienceUCSB />
            <ExperienceMliora />
        </div>

    );
}

function ExperienceSkyworks() {
    return (
        <div>
            <div className="experience-header">
                <h3>Product/Test Engineering Software Intern | Skyworks Solutions, Inc</h3>
                <h4>Irvine, CA</h4>
                <h4>June 2022 – August 2022</h4>
            </div>
            <ul>
                <li>Coded Python scripts to extract information from semiconductor data and to benchmark analytics system</li>
                <li>Wrote and updated software documentation</li>
                <li>Provided support towards the product/test engineers and other users</li>
            </ul>
        </div>
    )
}

function ExperienceUCSB() {
    return (
        <div>
            <div className="experience-header">
                <h3>Data Science Fellow | University of California, Santa Barbara</h3>
                <h4>Goleta, CA (Remote)</h4>
                <h4>June 2021 – August 2021</h4>
            </div>
            <ul>
                <li>Created linear regression models to detect correlations among bee-plant species interactions</li>
                <li>Created a multiclass classification model to identify interactions by bee family </li>
                <li>Presented findings of patterns using heat maps and world map plots</li>
                <li>Cleaned 27 percent of the data collected</li>
            </ul>
        </div>
    );
}

function ExperienceMliora() {
    return (
        <div>
            <div className="experience-header">
                <h3>UI Designer/Front-End Developer Intern | MLiora</h3>
                <h4>San José, CA (Remote)</h4>
                <h4>June 2021 – August 2021</h4>
            </div>
            <ul>
                <li>Designed the wireframes for the login and home screens of the company website</li>
                <li>Translated design wireframes into cross-browser website pages in React JS</li>
                <li>Built a token-based authentication login</li>
            </ul>
        </div>
    )
}