import React from "react";
import PageHeading from '../shared/PageHeading'
import ProjectCard from "../shared/ProjectCard";
import { genAssemblyImg, cdwImg, armyImg, utImg } from "../assets/imageLinks";

const ProfessionalWork = () => {
  return (
    <div id='background' style={{ padding: '2rem 1rem'}}>
      <PageHeading value={'Related Background'} />
      <ProjectCard
        image={genAssemblyImg}
        title={'Student, General Assembly Bootcamp'} 
        description={'6 month, 400+ hour, part time Software Engineering Immersive bootcamp'} 
        projectLink={'genassembly'}
      />
      <ProjectCard
        image={cdwImg}
        title={'Network Engineer, CDW'} 
        description={'Designed computer networks and worked with various scripting languages'} 
        projectLink={'neteng-cdw'}
      />
      <ProjectCard
        image={armyImg}
        title={'IT Specialist, US Army Reserve'} 
        description={'IT Specialist role in the US Army Reserve'} 
        projectLink={'it-army'}
      />
      <ProjectCard
        image={utImg}
        title={'Bachelors HDFS, University of Texas at Austin'} 
        description={'IT Specialist role in the US Army Reserve'} 
        projectLink={'degree-ut'}
      />
    </div>
  )
}

export default ProfessionalWork