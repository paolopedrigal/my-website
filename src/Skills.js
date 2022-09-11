import SkillNode from './SkillNode';
import './Skills.css';

function Skills() {
    return (
        <div className='skills-section'>
            <h3 id='skills-title'>Skills</h3>
            <ul className='skills-filters'>
                <li className='skill-filter'>All</li>
                <li className='skill-filter'>Programming Languages</li>
                <li className='skill-filter'>Front-End</li>
                <li className='skill-filter'>Back-End</li>
                <li className='skill-filter'>Data Science</li>
                <li className='skill-filter'>Team-oriented Tech</li>
            </ul>
            <ul className='skills-nodes'>
                <SkillNode skill={"Python"} />
                <SkillNode skill={"Java"} />
                <SkillNode skill={"C++"} />
                <SkillNode skill={"JavaScript"} />
                <SkillNode skill={"React JS"} />
                <SkillNode skill={"HTML"} />
                <SkillNode skill={"CSS"} />
                <SkillNode skill={"Node JS"} />
                <SkillNode skill={"Figma"} />
                <SkillNode skill={"PostgreSQL"} />
                <SkillNode skill={"Cassandra"} />
                <SkillNode skill={"PyMongo"} />
                <SkillNode skill={"Neo4j"} />
                <SkillNode skill={"Pandas"} />
                <SkillNode skill={"Matplotlib"} />
                <SkillNode skill={"Numpy"} />
                <SkillNode skill={"Sci-kit Learn"} />
                <SkillNode skill={"NLTK"} />
                <SkillNode skill={"R"} />
                <SkillNode skill={"Bash"} />
                <SkillNode skill={"Zoom"} />
                <SkillNode skill={"GitHub"} />
                <SkillNode skill={"Microsoft Excel"} />
                <SkillNode skill={"Slack"} />
            </ul>
        </div>
    );
}

export default Skills;