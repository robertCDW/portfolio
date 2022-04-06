import React from "react";
import PageHeading from "../shared/PageHeading";
import Project from "../shared/Project";

const Projects = () => {
  return (
    <div id='projects' style={{ padding: '2rem 1rem'}}>
        <PageHeading value={'Projects'} />
        <Project 
          image={'https://user-images.githubusercontent.com/71351016/162082449-a7264ea6-5f49-4520-b9b0-1582ffaed4cb.jpg'}
          title={'Daily Prioritization Scheduler'} 
          description={'Intelligently prioritizes tasks to plan your day using React, MongoDB, Express.js, and Node'}
          projectLink={'dayplanner'}
          inProgress
        />
        <Project 
          image={'https://user-images.githubusercontent.com/71351016/162082449-a7264ea6-5f49-4520-b9b0-1582ffaed4cb.jpg'}
          title={'Speed Reader'} 
          description={'Learn to reader faster with unlimited content using React, MongoDB, Express.js, and Node'}
          projectLink={'speedreader'}
          inProgress
        />
        <Project 
          image={'https://user-images.githubusercontent.com/71351016/162082449-a7264ea6-5f49-4520-b9b0-1582ffaed4cb.jpg'}
          title={'JIRA Clone'} 
          description={'JIRA inspired app using React, MongoDB, Express.js, and Node'}
          projectLink={'jira'}
          inProgress
        />
        <Project 
          image={'https://user-images.githubusercontent.com/71351016/162082449-a7264ea6-5f49-4520-b9b0-1582ffaed4cb.jpg'}
          title={'Musicflix'}
          description={'Netflix inspired messageboard using React, MongoDB, Express.js, and Node'}
          projectLink={'musicflix'}
        />
    </div>
  )
}

export default Projects
