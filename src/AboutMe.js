function AboutMe() {
    return (
        <div>
            <h2>About Me</h2>
            <AboutMeEducation />
            <AboutMeSkills />
        </div>


    )
}

function AboutMeEducation() {
    return (
        <div>
            <h3>Education</h3>
            <div>
                <b>Univeristy of California, Irvine</b>
                <b>Degree Expected: June 2023</b>
                <b>Bachelors of Science, Computer Science</b>
                <ul>
                    <li>Recipent of the Regents Scholarship</li>
                    <li>Relevant Coursework: 
                    Design/Analysis of Algorithms, 
                    Data Structures & Abstraction, 
                    Introduction to Probability & Statistics, 
                    Methodologies of Data Visualization, 
                    Data Management, 
                    Information Retrieval
                    </li>
                </ul>
            </div>
        </div>
        
    )
}

function AboutMeSkills() {
    return (
        <div>
            <h3>Skills</h3>
            <ul>
                <li>Programming Languages: Python, Java, C++</li>
                <li>Front-End: HTML, CSS, JavaScript, React JS, Figma</li>
                <li>Back-End: PostgreSQL, Cassandra, MongoDB, Neo4j, SparkSQL</li>
                <li>Data Science/Machine Learning Libraries: Numpy, Pandas, Matplotlib, Sci-kit Learn, TIBCO Spotfire</li>
                <li>Team-oriented: GitHub, Jira, Slack, Microsoft Teams, Zoom</li>
            </ul>
        </div>
    );
}

export default AboutMe;