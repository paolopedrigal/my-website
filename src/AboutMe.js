function AboutMe() {
    return (
        <div>
            <h2>About Me</h2>
            <AboutMeEducation />
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

export default AboutMe;