import React from "react";
import PageHeading from '../shared/PageHeading'
import ProjectCard from "../shared/ProjectCard";

const ProfessionalWork = () => {
  return (
    <div id='professional-work' style={{ padding: '2rem 1rem'}}>
      <PageHeading value={'Professional Projects'} />
      <ProjectCard
        image={'https://user-images.githubusercontent.com/71351016/162082449-a7264ea6-5f49-4520-b9b0-1582ffaed4cb.jpg'}
        title={'Therr'} 
        description={'Desktop app development using React and Typescript'} 
        projectLink={'therr'}
        deployed={"https://therr.com/"}
      />
    </div>
  )
}

export default ProfessionalWork