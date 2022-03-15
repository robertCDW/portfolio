import React from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../../project-data/projects";

const CaseStudy = () => {
  const { id } = useParams()

  const project = projects[id]

  // projects format
  // 
  // useEffect

  return (
    <div>
      <Link to='/'>Robert Scales</Link>
      <h2>{project.title}</h2>
      {project.tech.map(stack => <li key={stack}>{stack}</li>)}
      {project.sections.map(section => {
        return (
          <div key={section.text}>
            {section.text && <p>{section.text}</p>}
            {section.code && <p>{section.code}</p>}
            {section.image && <img src={`/images/${section.image}`} alt='' />}
          </div>
        )
      })}
      <div>
        {project.link.deployed && <p>See the deployed site here: <a target="_blank" href={project.link.deployed} rel="noreferrer">Deployed Site</a></p>}
        {project.link.github && <p>See the full source code here: <a target="_blank" href={project.link.github} rel="noreferrer">Github Repo</a></p>}
      </div>
    </div>
  )
}

export default CaseStudy
