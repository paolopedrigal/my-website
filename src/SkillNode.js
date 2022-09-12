import { useState } from 'react';
import './SkillNode.css';

export default function SkillNode(props) {
    const [node, setNode] = useState({
        isHovered: false,
        // isClicked: false
    })

    // function handleClicked() {
    //     setNode((prevState) => ({isHovered: prevState.isHovered, isClicked: !prevState.isClicked}))
    // }

    function handleHovered() {
        setNode((prevState) => ({isHovered: !prevState.isHovered, isClicked: prevState.isClicked}))
    }

    function hoveredOrFiltered() {

        if (props.isFiltered) {
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
        <p className='skill-node' onMouseEnter={handleHovered} onMouseLeave={handleHovered} style={{backgroundColor: `${hoveredOrFiltered()}`}}>{props.skill}</p>
    );
}