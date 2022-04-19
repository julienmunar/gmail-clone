import React from 'react'
import './section.css'


const Section = ({selected,color,Icon,title}) => {
  return (
    <div  className={`section ${selected && "section--selected"}`} style={{borderBottom:`3px solid ${color}`,
    color:`${selected && color }`   }}>
   
 <Icon/>
 <h3>{title}</h3>
    </div>
  )
}

export default Section