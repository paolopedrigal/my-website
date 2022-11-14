import { useRef, useEffect } from "react";
import Nodes from "./canvas-nodes.js";

function Canvas() {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        console.log("Test", canvas);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 
        const context = canvas.getContext("2d");   
        const nodes = new Nodes(10, context, 100, "white");
        nodes.spawnNodes();
        
        window.addEventListener('resize', () => { // updates the canvas's screen when the browser is resized
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          
            // init() //   <--- Potentially uncomment this
        })

        function animate() {
            requestAnimationFrame(animate);
            context.clearRect(0, 0, canvas.width, canvas.height);
            nodes.updateNodes();
        }

        animate();
    })


    return(
        <canvas 
            ref={canvasRef}>
        </canvas>
    );
}

export default Canvas;