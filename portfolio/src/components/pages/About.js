import React from "react";
import profileImage from './../../images/profileImage.jpg'
import styles from './../css/About.module.css'

const About = () => {
  return (
    <div id={'about'} className={styles.about} style={{ height: '100vh', borderStyle: 'solid'}}>
      <div><img className={styles.profileImage} src={profileImage} alt="Robert Scales" /></div>
      <h1>Robert Scales is a full stack developer</h1>
      <h1>with a middleware focus and a background in network engineering.</h1>
    </div>
  )
}

export default About
