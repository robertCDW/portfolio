import React from "react";
// import profileImage from './../../images/profileImage.jpg'
import styles from './../css/unique/About.module.css'

const About = () => {
  return (
    <div id={'about'} className={styles.about} style={{ padding: '2rem 1rem'}}>
      <img className={styles.profileImage} src='images/profileImage.jpg' alt="Robert Scales" />
      <h1>Robert Scales is a full stack developer</h1>
      <h1>with a middleware focus and a background in network engineering.</h1>
    </div>
  )
}

export default About
