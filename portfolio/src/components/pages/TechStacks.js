import React, { useEffect, useState } from "react";

import styles from './../css/unique/TechStack.module.css'
import PageHeading from '../shared/PageHeading'

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
    'React (class based and hooks',
    'HTML',
    'CSS',
    'JavaScript',
    'SQL',
    'Mongo',
    'Typescript',
    'Java',
    'C++',
    'PostgreSQL',
    'Redis',
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
  const [top, setTop] = useState([])
  const [items, setItems] = useState([])


  useEffect(() => {
    setTop(skills.slice(0,topCount))
    setItems(skills.slice(topCount,skills.length))
  }, [])

  return (
    <div id='techstacks' style={{ padding: '2rem 1rem 2rem 1rem'}}>
      <div>
        <PageHeading value={'Tech Stacks'} />
        <div>
          <ul className={styles.skills}>
          {top.map(item => <li className={`${styles.skill} ${styles.top}`} key={item}>{item}</li>)}
          {items.map(item => <li className={styles.skill} key={item}>{item}</li>)}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default TechStacks
