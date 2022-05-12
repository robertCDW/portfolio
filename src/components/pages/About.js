import React from "react";
// import profileImage from './../../images/profileImage.jpg'
import styles from './../css/unique/About.module.css'

const About = () => {
  return (
    <div id={'about'} className={styles.about} style={{ padding: '2rem 1rem'}}>
      <img className={styles.profileImage} src='https://user-images.githubusercontent.com/71351016/162082205-3c7052d0-dea1-420a-8a3b-b8efccbaa305.jpg' alt="Robert Scales" />
      <h1>Robert Scales is a full stack developer who recently graduated from a web bootcamp after 3 years of experience in network engineering utilizing automation and scripting.</h1>
    </div>
  )
}

export default About
