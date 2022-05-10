import React from "react";
import PageHeading from "../shared/PageHeading";
import ProjectCard from "../shared/ProjectCard";

const Projects = () => {
  return (
    <div id='projects' style={{ padding: '2rem 1rem'}}>
        <PageHeading value={'Projects'} />
        <ProjectCard 
          image={'https://user-images.githubusercontent.com/71351016/162082449-a7264ea6-5f49-4520-b9b0-1582ffaed4cb.jpg'}
          title={'Speed Reader'} 
          description={'Learn to reader faster with unlimited content using React, MongoDB, Express.js, and Node'}
          projectLink={'speedreader'}
        />
        <ProjectCard
          image={'https://user-images.githubusercontent.com/71351016/162082449-a7264ea6-5f49-4520-b9b0-1582ffaed4cb.jpg'}
          title={'Map Escape'} 
          description={'Intelligently prioritizes tasks to plan your day using React, MongoDB, Express.js, and Node'}
          projectLink={'dayplanner'}
        />
        <ProjectCard 
          image={'https://user-images.githubusercontent.com/71351016/162082449-a7264ea6-5f49-4520-b9b0-1582ffaed4cb.jpg'}
          title={'Netflix Clone'}
          description={'Netflix inspired messageboard using React, MongoDB, Express.js, and Node'}
          projectLink={'musicflix'}
          inProgress
        />
        <ProjectCard 
          image={'https://user-images.githubusercontent.com/71351016/162082449-a7264ea6-5f49-4520-b9b0-1582ffaed4cb.jpg'}
          title={'Daily Prioritization Scheduler'} 
          description={'Intelligently prioritizes tasks to plan your day using React, MongoDB, Express.js, and Node'}
          projectLink={'dayplanner'}
          inProgress
        />
    </div>
  )
}

export default Projects
