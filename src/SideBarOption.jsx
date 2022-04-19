import React from 'react'
import './sideBarOption.css'


const SideBarOption = ({Icon,title,number,selected}) => {
  return (
    <div className={`sideBarOption ${selected && "sideBarOption--active"}`}>
        <Icon/>
        <h3>{title}</h3>
        <p>{number}</p>
        </div>
  )
}

export default SideBarOption