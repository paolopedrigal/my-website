import { useState } from 'react';
import SkillNode from './SkillNode.js';
import SkillFilter from './SkillFilter.js';
import './Skills.css';

function Skills() {

    const [filtered, setFiltered] = useState({
        isFilterAll: false,
        isFilterProgLang: false,
        isFilterFrontEnd: false,
        isFilterBackEnd: false,
        isFilterDataScience: false,
        isFilterTeamTech: false
    })

    function filterAll() {
        setFiltered(
            (prevState) => {
                if (prevState.isFilterAll === false) {
                    return {isFilterAll: !prevState.isFilterAll,
                        isFilterProgLang: prevState.isFilterProgLang ? prevState.isFilterProgLang : !prevState.isFilterProgLang,
                        isFilterFrontEnd: prevState.isFilterFrontEnd ? prevState.isFilterFrontEnd : !prevState.isFilterFrontEnd,
                        isFilterBackEnd: true,
                        isFilterDataScience: true,
                        isFilterTeamTech: true}    
                }
                else {
                    return {isFilterAll: !prevState.isFilterAll,
                        isFilterProgLang: prevState.isFilterProgLang ? !prevState.isFilterProgLang : prevState.isFilterProgLang,
                        isFilterFrontEnd: prevState.isFilterFrontEnd ? !prevState.isFilterFrontEnd : prevState.isFilterFrontEnd,
                        isFilterBackEnd: false,
                        isFilterDataScience: false,
                        isFilterTeamTech: false}  
                }
            }
        )
    }

    function filterProgLang() {
        setFiltered((prevState) => ({...prevState, isFilterProgLang: !prevState.isFilterProgLang}))
    }

    function filterFrontEnd() {
        setFiltered((prevState) => ({...prevState, isFilterFrontEnd: !prevState.isFilterFrontEnd}))
    }

    function filterBackEnd() {
        setFiltered((prevState) => ({...prevState, isFilterBackEnd: !prevState.isFilterBackEnd}))
    }

    function filterDataScience() {
        setFiltered((prevState) => ({...prevState, isFilterDataScience: !prevState.isFilterDataScience}))
    }

    function filterTeamTech() {
        setFiltered((prevState) => ({...prevState, isFilterTeamTech: !prevState.isFilterTeamTech}))
    }

    return (
        <div className='skills-section'>
            <h3 id='skills-title'>Skills</h3>
            <ul className='skills-filters'>
                <div className='skills-filter-div' onClick={filterAll}>
                    <SkillFilter filter={"All"} isFiltered={filtered.isFilterAll}/>
                </div>
                <div className='skills-filter-div' onClick={filterProgLang} >
                    <SkillFilter filter={"Programming Languages"} isFiltered={filtered.isFilterProgLang}/>
                </div>
                <div className='skills-filter-div' onClick={filterFrontEnd}>
                    <SkillFilter filter={"Front-End"} isFiltered={filtered.isFilterFrontEnd}/>
                </div>
                <div className='skills-filter-div' onClick={filterBackEnd}>
                    <SkillFilter filter={"Back-End"} isFiltered={filtered.isFilterBackEnd}/>
                </div>
                <div className='skills-filter-div' onClick={filterDataScience}>
                    <SkillFilter filter={"Data Science"} isFiltered={filtered.isFilterDataScience}/>
                </div>
                <div className='skills-filter-div' onClick={filterTeamTech}>
                    <SkillFilter filter={"Team-oriented Tech"} isFiltered={filtered.isFilterTeamTech}/>
                </div>
            </ul>
            <ul className='skills-nodes'>
                <SkillNode skill={"Python"} isFiltered={filtered.isFilterProgLang}/>
                <SkillNode skill={"Java"} isFiltered={filtered.isFilterProgLang}/>
                <SkillNode skill={"C++"} isFiltered={filtered.isFilterProgLang}/>
                <SkillNode skill={"JavaScript"} isFiltered={filtered.isFilterProgLang}/>
                <SkillNode skill={"React JS"} isFiltered={filtered.isFilterFrontEnd}/>
                <SkillNode skill={"HTML"} isFiltered={filtered.isFilterFrontEnd}/>
                <SkillNode skill={"CSS"} isFiltered={filtered.isFilterFrontEnd}/>
                <SkillNode skill={"Node JS"} isFiltered={filtered.isFilterFrontEnd}/>
                <SkillNode skill={"Figma"} isFiltered={filtered.isFilterFrontEnd}/>
                <SkillNode skill={"PostgreSQL"} isFiltered={filtered.isFilterBackEnd}/>
                <SkillNode skill={"Cassandra"} isFiltered={filtered.isFilterBackEnd}/>
                <SkillNode skill={"PyMongo"} isFiltered={filtered.isFilterBackEnd}/>
                <SkillNode skill={"Neo4j"} isFiltered={filtered.isFilterBackEnd}/>
                <SkillNode skill={"Pandas"} isFiltered={filtered.isFilterDataScience}/>
                <SkillNode skill={"Matplotlib"} isFiltered={filtered.isFilterDataScience}/>
                <SkillNode skill={"Numpy"} isFiltered={filtered.isFilterDataScience}/>
                <SkillNode skill={"Sci-kit Learn"} isFiltered={filtered.isFilterDataScience}/>
                <SkillNode skill={"NLTK"} isFiltered={filtered.isFilterDataScience}/>
                <SkillNode skill={"R"} isFiltered={filtered.isFilterDataScience} />
                <SkillNode skill={"Bash"} isFiltered={filtered.isFilterTeamTech}/>
                <SkillNode skill={"Zoom"} isFiltered={filtered.isFilterTeamTech}/>
                <SkillNode skill={"GitHub"} isFiltered={filtered.isFilterTeamTech}/>
                <SkillNode skill={"Microsoft Excel"} isFiltered={filtered.isFilterTeamTech}/>
                <SkillNode skill={"Slack"} isFiltered={filtered.isFilterTeamTech}/>
            </ul>
        </div>
    );
}

export default Skills;