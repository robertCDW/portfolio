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

export const ProjectImage = () => {
    return <img 
        className={ styles.appImage }
        src={"https://i.imgur.com/XwAselJ.jpeg"}
        alt={"App"}
        />
}

export const ProjectText = ({ text }) => {
    return <p>{text}</p>
}

export const ProjectCode = ({ code }) => {
    return (
        <div className={ styles.codeSnippet }>
            <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
            &lt;p&gt;And another line of sample text here...&lt;/p&gt;</code></pre>
        </div>
    )
}

export const ProjectLinks = ({ deployed, github}) => {
    return <div>
        {deployed && <p>See the deployed site here: <a target="_blank" href={deployed} rel="noreferrer">Deployed Site</a></p>}
        {github && <p>See the full source code here: <a target="_blank" href={github} rel="noreferrer">Github Repo</a></p>}
  </div>
}