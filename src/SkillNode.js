import { useState } from 'react';
import './SkillNode.css';

export default function SkillNode(props) {
    const [node, setNode] = useState({
        isHovered: false,
        isClicked: false
    })

    function handleClicked() {
        setNode((prevState) => ({isHovered: prevState.isHovered, isClicked: !prevState.isClicked }))
    }

    function handleHovered() {
        setNode((prevState) => ({isHovered: !prevState.isHovered, isClicked: prevState.isClicked}))
    }

    function hoveredOrClicked() {

        if (node.isClicked) {
            return "#74F29F" // green
        }
        else if (node.isHovered) {
            return "#CECCCC" // grey
        }
        else {
            return "#D9D9D9" // default
        }
    }

    return (
        <p className='skill-node' onClick={handleClicked} onMouseEnter={handleHovered} onMouseLeave={handleHovered} style={{backgroundColor: `${hoveredOrClicked()}`}}>{props.skill}</p>
    );
}