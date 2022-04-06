import React from 'react';
import { Link } from "react-router-dom";
import { StackIcon } from './StackIcon';
import styles from '../css/shared/Projects.module.css'

export const ReturnHomeLink = () => {
    return <Link to='/' style={{ textDecoration: 'none' }}>&larr; Robert Scales</Link>
}

export const ProjectTitle = ({ title }) => {
    return <h1>Project: {title}</h1>
}

export const ProjectStack = ({ items }) => {
    console.log(items)
    return (
        <ul style={{
            listStyle: 'none',
            padding: '1em 0 1em 0'
        }}>
            {items.map(item => <div key={item} style={{ display: 'inline'}}><StackIcon item={item} /></div>)}
        </ul>
    )
}

export const ProjectDescription = ({ text }) => {
    return <p className="lead">{text}</p>
}

export const ProjectImage = ({ image }) => {
    return <img 
        className={ styles.appImage }
        src={image}
        alt={"App"}
        />
}

export const ProjectText = ({ text }) => {
    return <p>{text}</p>
}

export const ProjectCode = ({ code }) => {
    // &lt; makes <
    // &gt; makes >
    return (
        <div className={ styles.codeSnippet }>
            <pre><code>{code}</code></pre>
        </div>
    )
}

export const ProjectLinks = ({ deployed, github}) => {
    return <div>
        {deployed && <p>See the deployed site here: <a href={deployed} target="_blank" rel="noreferrer">Deployed Site</a></p>}
        {github && <p>See the full source code here: <a href={github} target="_blank" rel="noreferrer">Github Repo</a></p>}
  </div>
}