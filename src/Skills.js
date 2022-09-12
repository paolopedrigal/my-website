import { useState } from 'react';
import SkillNode from './SkillNode.js';
import SkillFilter from './SkillFilter.js';
import './Skills.css';

function Skills() {

    const [filtered, setFiltered] = useState({
        isAll: false,
        isProgLang: false,
        isFrontEnd: false,
        isBackEnd: false,
        isDataScience: false,
        isTeam: false
        })

    return (
        <div className='skills-section'>
            <h3 id='skills-title'>Skills</h3>
            <ul className='skills-filters'>
                <SkillFilter filter={"All"} />
                <SkillFilter filter={"Programming Languages"} />
                <SkillFilter filter={"Front-End"} />
                <SkillFilter filter={"Back-End"} />
                <SkillFilter filter={"Data Science"} />
                <SkillFilter filter={"Team-oriented Tech"} />
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