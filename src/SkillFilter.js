import { useState } from 'react';
import './SkillFilter.css';

export default function SkillFilter(props) {

    const [filter, setFilter] = useState({
        isClicked: false,
        isHovered: false
    })

    function handleClicked() {
        setFilter((prevState) => ({isClicked: !prevState.isClicked, isHovered: prevState.isHovered}))
    }

    function handleHovered() {
        setFilter((prevState) => ({isClicked: prevState.isClicked, isHovered: !prevState.isHovered}))
    }

    function hoveredOrClicked() {

        if (filter.isClicked) {
            return "#74F29F" // green
        }
        else if (filter.isHovered) {
            return "#CECCCC" // grey
        }
        else {
            return "#D9D9D9" // default
        }
    }
    
    return(
        <p className='skill-filter' onClick={handleClicked} onMouseEnter={handleHovered} onMouseLeave={handleHovered} 
        style={{backgroundColor: `${hoveredOrClicked()}`}}>{props.filter}</p>
    );
}