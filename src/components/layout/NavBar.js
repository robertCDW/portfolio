import React from "react";
import styles from '../css/unique/Navbar.module.css'
import { Link as LinkScroll } from "react-scroll/modules";
// import NavItem from "../shared/NavItem";

const NavBar = ({ windowSize }) => {

  return (
    <nav className={styles.navbar}>
      <LinkScroll 
        to='about'
        className={styles.navItem}
        smooth={true}
        spy={true}
        duration={500}
        exact='true'>About</LinkScroll>
      <LinkScroll 
        to='techstacks'
        className={styles.navItem}
        smooth={true}
        spy={true}
        duration={500}
        exact='true'>Tech Stacks</LinkScroll>
      <LinkScroll 
        to='professional-work'
        className={styles.navItem}
        smooth={true}
        spy={true}
        duration={500}
        exact='true'>Professional Projects</LinkScroll>
      <LinkScroll 
        to='projects'
        className={styles.navItem}
        smooth={true}
        spy={true}
        duration={500}
        exact='true'>Personal Projects</LinkScroll>
      <LinkScroll 
        to='background'
        className={styles.navItem}
        smooth={true}
        spy={true}
        duration={500}
        exact='true'>Background</LinkScroll>
      <LinkScroll 
        to='contact'
        className={styles.navItem}
        smooth={true}
        spy={true}
        duration={500}
        exact='true'>Contact Me</LinkScroll>

    </nav>
  )
}

export default NavBar
