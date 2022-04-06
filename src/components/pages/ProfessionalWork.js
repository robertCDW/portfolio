import React from "react";
import PageHeading from '../shared/PageHeading'
import Project from "../shared/Project";

const ProfessionalWork = () => {
  return (
    <div id='professional-work' style={{ padding: '2rem 1rem'}}>
      <PageHeading value={'Professional Work'} />
      <Project 
        image={'https://user-images.githubusercontent.com/71351016/162082449-a7264ea6-5f49-4520-b9b0-1582ffaed4cb.jpg'}
        title={'Therr'} 
        description={'Desktop app development using React and Typescript'} 
        projectLink={'therr'}
      />
    </div>
  )
}

export default ProfessionalWork