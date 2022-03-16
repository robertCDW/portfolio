import React from "react";
import PageHeading from "../shared/PageHeading";
import Project from "../shared/Project";

const Projects = () => {
  return (
    <div id='projects' style={{ padding: '2rem 1rem 2rem 1rem'}}>
        <PageHeading value={'Projects'} />
        <Project 
          image={'images/therr-app.webp'}
          title={'Netflix with Comments'}
          description={'Web app development using MongoDB, Express.js, React, and Node'}
          projectLink={'netflix'}
        />
        <Project 
          image={'images/therr-app.webp'}
          title={'JIRA Clone'} 
          description={'Web app development using MongoDB, Express.js, React, and Node'}
          projectLink={'jira'}
          inProgress
        />
        <Project 
          image={'images/therr-app.webp'}
          title={'AP Config Tool'} 
          description={'Web app development using React, Python, Django, Postgre'}
          projectLink={'configs'}
          inProgress
        />
    </div>
  )
}

export default Projects
