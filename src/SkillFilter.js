import { useState } from 'react';
import './SkillFilter.css';

export default function SkillFilter(props) {

    const [filter, setFilter] = useState({
        isHovered: false
    })

    function handleHovered() {
        setFilter((prevState) => ({isHovered: !prevState.isHovered}))
    }

    function hoveredOrFiltered() {

        if (props.isFiltered) {
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
        <p className='skill-filter' onMouseEnter={handleHovered} onMouseLeave={handleHovered} 
        style={{backgroundColor: `${hoveredOrFiltered()}`}}>{props.filter}</p>
    );
}