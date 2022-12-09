import { useRef, useEffect, useState } from "react";
import Nodes from "./canvas-nodes.js";
import SkillFilter from "./SkillFilter.js";
import "./Canvas.css";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils/index.js";


function Canvas() {

    const nodesNames = ["Python", "Java", "C++", "JavaScript", "ReactJS",
        "HTML", "CSS", "Node JS", "Express", "PostgreSQL",
        "Cassandra", "PyMongo", "Neo4j", "Pandas", "Matplotlib", 
        "Numpy", "Sci-kit Learn", "NLTK", "Zoom",
        "GitHub", "Microsoft Excel", "Slack"];
    const nodesProgLang = nodesNames.slice(0, 4);
    const nodesFrontEnd = nodesNames.slice(4, 7);
    const nodesBackEnd = nodesNames.slice(7, 13);
    const nodesDataScience = nodesNames.slice(13, 19);
    const nodesTeamOriented = nodesNames.slice(19, nodesNames.length);
    const numNodes = nodesNames.length;
    const nodeRadius = 100;
    const nodeColor = "#D9D9D9";
    const canvasRef = useRef(null);

    const [filtered, setFiltered] = useState({
        isAllFiltered: false,
        isProgLangFiltered: false,
        isFrontEndFiltered: false,
        isBackEndFiltered: false,
        isDataScienceFiltered: false,
        isTeamOrientedFiltered: false
    })

    const [positions, setPositions] = useState({});

    function filterAll() {
        setFiltered((prevState) => {
            if (prevState.isAllFiltered === false) {
                return {
                    isAllFilterd: !prevState.isAllFiltered,
                    isProgLangFiltered: true,
                    isFrontEndFiltered: true,
                    isBackEndFiltered: true,
                    isDataScienceFiltered: true,
                    isTeamOrientedFiltered: true
                }
            }
            else {
                return {
                    isAllFiltered: !prevState.isAllFiltered,
                    isProgLangFiltered: false,
                    isFrontEndFiltered: false,
                    isBackEndFiltered: false,
                    isDataScienceFiltered: false,
                    isTeamOrientedFiltered: false
                }
            }
        })
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const SLEEP = 1000;

    async function filterProgLang() {
        await sleep(SLEEP);
        setFiltered((prevState) => ({...prevState, isProgLangFiltered: !prevState.isProgLangFiltered }));
    }

    async function filterFrontEnd() {
        await sleep(SLEEP);
        setFiltered((prevState) => ({...prevState, isFrontEndFiltered: !prevState.isFrontEndFiltered}));
    }

    async function filterBackEnd() {
        await sleep(SLEEP);
        setFiltered((prevState) => ({...prevState, isBackEndFiltered: !prevState.isBackEndFiltered}));
    }

    async function filterDataScience() {
        await sleep(SLEEP);
        setFiltered((prevState) => ({...prevState, isDataScienceFiltered: !prevState.isDataScienceFiltered}));
    }

    async function filterTeamOriented() {
        await sleep(SLEEP);
        setFiltered((prevState) => ({...prevState, isTeamOrientedFiltered: !prevState.isTeamOrientedFiltered}));
    }

    useEffect(() => {

        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 
        canvas.style.backgroundColor = "transparent";
        const context = canvas.getContext("2d");   
        const nodes = new Nodes(numNodes, context, nodeRadius, nodeColor, positions);
        nodes.setNodesNames(nodesNames);
        nodes.spawnNodes();

        window.addEventListener('resize', () => { // updates the canvas's screen when the browser is resized
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;          
        })

        function animate() {
            requestAnimationFrame(animate);
            context.clearRect(0, 0, canvas.width, canvas.height);
            if (filtered.isProgLangFiltered) nodes.updateNodes(nodesProgLang);
            if (filtered.isFrontEndFiltered) nodes.updateNodes(nodesFrontEnd);
            if (filtered.isBackEndFiltered) nodes.updateNodes(nodesBackEnd);
            if (filtered.isDataScienceFiltered) nodes.updateNodes(nodesDataScience);
            if (filtered.isTeamOrientedFiltered) nodes.updateNodes(nodesTeamOriented);
            else {
                nodes.updateNodes([]);
            }
            setPositions(nodes.getPositions());
        }
        
        animate();
        
    }, [filtered])



    return(
        <div className="skills-section">
            <h1 id="skills-title">Skills</h1>
            <div className="skills-filters">
                {/* <div style={{background: "transparent"}} onClick={filterAll}>
                    <SkillFilter filter={"All"} isFiltered={filtered.isAllFiltered} />
                </div> */}
                <div style={{background: "transparent"}} onClick={filterProgLang}>
                    <SkillFilter filter={"Programming Languages"} isFiltered={filtered.isProgLangFiltered}/>
                </div>
                <div style={{background: "transparent"}} onClick={filterFrontEnd}>
                    <SkillFilter filter={"Front-End"} isFiltered={filtered.isFrontEndFiltered} />
                </div>
                <div style={{background: "transparent"}} onClick={filterBackEnd}>
                    <SkillFilter filter={"Back-End"} isFiltered={filtered.isBackEndFiltered} />
                </div>
                <div style={{background: "transparent"}} onClick={filterDataScience}>
                    <SkillFilter filter={"Data Science"} isFiltered={filtered.isDataScienceFiltered} />
                </div>
                <div style={{background: "transparent"}} onClick={filterTeamOriented}>
                    <SkillFilter filter={"Team-oriented Tech"} isFiltered={filtered.isTeamOrientedFiltered} />
                </div>
            </div>
            <canvas 
                ref={canvasRef}>
            </canvas>
        </div>

    );
}

export default Canvas;