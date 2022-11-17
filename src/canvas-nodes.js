import {randomInt, randomColor, distance, isCollided, rotate, resolveCollision} from "./canvas-utils.js";
import Node from "./canvas-node.js";

export default class Nodes {
    constructor(numNodes, context, radius, color, positions) {
        this.numNodes = numNodes;
        this.context = context;
        this.radius = radius;
        this.color = color;
        this.positions = positions;
        this.nodes = [];
        this.nodesNames = [];
    }

    setNodesNames(nodesNames) { this.nodesNames = nodesNames; }

    spawnNodes() {
        for (let i = 0; i < this.numNodes; i++) {

            let x;
            let y;

            // Get xy coordinates for each node
            if (Object.keys(this.positions).length != 0) { // if positions are already known
                let name = this.nodesNames[i];
                x = this.positions[name].x;
                y = this.positions[name].y;
            }
            else { // otherwise randomize the positions
                x = randomInt(this.radius, window.innerWidth - this.radius); // guarantees to spawn strictly inside canvas
                y = randomInt(this.radius, window.innerHeight - this.radius); // guarantees to spawn strictly inside canvas
            }

            // If node is spawned on another node, re-create xy coordinates
            for (let j = 0; j < this.nodes.length; j++) {
                let dist = distance(x, y, this.nodes[j].x, this.nodes[j].y);
                if (isCollided(dist, this.radius)){

                    if (Object.keys(this.positions).length != 0) { // if positions are already known
                        let name = this.nodesNames[i];
                        x = this.positions[name].x;
                        y = this.positions[name].y;
                    }
                    else { // otherwise randomize the positions
                        x = randomInt(this.radius, window.innerWidth - this.radius); // guarantees to spawn strictly inside canvas
                        y = randomInt(this.radius, window.innerHeight - this.radius); // guarantees to spawn strictly inside canvas
                    }
                    j = -1; // reset for loop to check all nodes again
                }
            }
    
            this.nodes.push(new Node(this.nodesNames[i], x, y, this.radius, this.color, this.context));
        }
    }

    getPositions() {
        // Returns the current xy-coorindates of each node in a JSON Object, where the key is the node name and the value is a nested JSON Object of the coordinates
        let positions = {};
        this.nodes.forEach((node) => {
            positions[node.name] = {
                x: node.x,
                y: node.y
            }
        });
        return positions;
    }

    updateNodes(nodesToFilter) {
        this.nodes.forEach(node => {
            
            // Check node if it collided with some other node
            for (let i = 0; i < this.numNodes; i++) {

                if (node == this.nodes[i]) continue; // Impossible for node to collide with itself

                let dist = distance(node.x, node.y, this.nodes[i].x, this.nodes[i].y); // Get distance between node and another node
                if (isCollided(dist, this.radius)) { // If node collided with another node
                    resolveCollision(node, this.nodes[i]);
                }
            }

            // Change color of nodes for the nodes that are filtered
            if (nodesToFilter.length != 0) {
                nodesToFilter.forEach(nToFilter => {
                    if (node.name == nToFilter) {
                        node.setColor("#74F29F") // Change to color green
                    }
                })
            }
        
            // Re-render node
            node.update();
        })
    }
}