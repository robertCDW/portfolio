import React, { useState } from "react";

import styles from './../css/unique/TechStack.module.css'
import PageHeading from '../shared/PageHeading'
import { StackIconTop, StackIcon } from "../shared/StackIcon";

const TechStacks = () => {

  const topCount = 5
  const skills = [
    // top skills
    'Python',
    'Node',
    'Django',
    'MongoDB',
    'Linux',
    // lower skills
    'React (class based and hooks)',
    'HTML',
    'CSS',
    'JavaScript',
    'SQL',
    'Mongo',
    'Typescript',
    'Java',
    'C++',
    'PostgreSQL',
    'Express.js',
    'jQuery',
    'Bootstrap',
    'Windows',
    'Cisco IOS',
    'AWS',
    'Google Cloud',
    'Docker',
    'RESTful Routing',
    'JSON',
    'Virtualization',
    'Microservices',
  ]
  const [top] = useState(skills.slice(0,topCount))
  const [items] = useState(skills.slice(topCount,skills.length))

  return (
    <div id='techstacks' style={{ padding: '2rem 1rem'}}>
      <div>
        <PageHeading value={'Tech Stacks'} />
        <div>
          <ul className={styles.skills}>
            {top.map(item => <div key={item} style={{ display: 'inline'}}><StackIconTop item={item} /></div>)}
            {items.map(item => <div key={item} style={{ display: 'inline'}}><StackIcon item={item} /></div>)}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default TechStacks
