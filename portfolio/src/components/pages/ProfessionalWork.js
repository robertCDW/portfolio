import React from "react";
import PageHeading from '../shared/PageHeading'
import Project from "../shared/Project";

const ProfessionalWork = () => {
  return (
    <div id='professional-work' style={{ padding: '0 1rem' }}>
      <PageHeading value={'Professional Work'} />
      <Project 
        image={'images/therr-app.webp'}
        title={'Therr'} 
        description={'Desktop app development using React and Typescript'} 
        projectLink={'therr'}
      />
    </div>
  )
}

export default ProfessionalWork