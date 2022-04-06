import React from "react";
import PageHeading from "../shared/PageHeading";
import Project from "../shared/Project";

const Projects = () => {
  return (
    <div id='projects' style={{ padding: '2rem 1rem'}}>
        <PageHeading value={'Projects'} />
        <Project 
          image={'images/therr-app.webp'}
          title={'Daily Prioritization Scheduler'} 
          description={'Web app development using React, MongoDB, Express.js, and Node'}
          projectLink={'dayplanner'}
          inProgress
        />
        <Project 
          image={'images/therr-app.webp'}
          title={'Speed Reader'} 
          description={'Web app development using React, MongoDB, Express.js, and Node'}
          projectLink={'speedreader'}
          inProgress
        />
        <Project 
          image={'images/therr-app.webp'}
          title={'JIRA Clone'} 
          description={'Web app development using React, MongoDB, Express.js, and Node'}
          projectLink={'jira'}
          inProgress
        />
        <Project 
          image={'images/therr-app.webp'}
          title={'Netflix with Messageboard'}
          description={'Web app development using React, MongoDB, Express.js, and Node'}
          projectLink={'musicflix'}
        />
    </div>
  )
}

export default Projects
