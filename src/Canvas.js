import { useRef, useEffect } from "react";
import Nodes from "./canvas-nodes.js";
import "./Canvas.css";

function Canvas() {

    const canvasRef = useRef(null);
    const nodesNames = ["Python", "Java", "C++", "JavaScript", "ReactJS",
        "HTML", "CSS", "Node JS", "Express", "Figma", "PostgreSQL",
        "Cassandra", "PyMongo", "Neo4j", "Pandas", "Matplotlib", 
        "Numpy", "Sci-kit Learn", "NLTK", "R", "Bash", "Zoom",
        "GitHub", "Microsoft Excel", "Slack"];
    const numNodes = nodesNames.length;
    const nodeRadius = 100;
    const nodeColor = "#D9D9D9";

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 
        canvas.style.backgroundColor = "transparent";
        const context = canvas.getContext("2d");   
        const nodes = new Nodes(numNodes, context, nodeRadius, nodeColor);
        nodes.setNodesNames(nodesNames);
        nodes.spawnNodes();
        
        window.addEventListener('resize', () => { // updates the canvas's screen when the browser is resized
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          
        })

        function animate() {
            requestAnimationFrame(animate);
            context.clearRect(0, 0, canvas.width, canvas.height);
            nodes.updateNodes();
        }

        animate();
    })


    return(
        <div className="skills-section">
            <h1 id="skills-title">Skills</h1>
            <canvas 
                ref={canvasRef}>
            </canvas>
        </div>

    );
}

export default Canvas;