import React from "react";
import PageHeading from "../shared/PageHeading";
import ProjectCard from "../shared/ProjectCard";
import { netflixImg, speedReaderImg, mapEscapeImg } from "../assets/imageLinks";

const Projects = () => {
  return (
    <div id='projects' style={{ padding: '2rem 1rem'}}>
        <PageHeading value={'Personal Projects'} />
        <ProjectCard 
          image={netflixImg}
          title={'Netflix Clone'}
          description={'Netflix inspired app using React, Redux, and Styled Components'}
          projectLink={'netflix'}
          deployed={"https://robscalesdev.github.io/netflix-clone"}
        />
        <ProjectCard 
          image={speedReaderImg}
          title={'Speed Reader'} 
          description={'Learn to reader faster with unlimited content using React and RedditAPI'}
          projectLink={'speedreader'}
          deployed={"https://robscalesdev.github.io/speedreader/"}
        />
        <ProjectCard
          image={mapEscapeImg}
          title={'Map Escape'} 
          description={'Uses graph search algorithms to find the fasstest way to the edge. Can you keep the chicken from escaping?'}
          projectLink={'mapescape'}
          deployed={"https://robscalesdev.github.io/map-escape/"}
        />
        {/* <ProjectCard 
          image={'https://user-images.githubusercontent.com/71351016/162082449-a7264ea6-5f49-4520-b9b0-1582ffaed4cb.jpg'}
          title={'Daily Prioritization Scheduler'} 
          description={'Intelligently prioritizes tasks to plan your day using React, MongoDB, Express.js, and Node'}
          projectLink={'dayplanner'}
          inProgress
        /> */}
    </div>
  )
}

export default Projects
