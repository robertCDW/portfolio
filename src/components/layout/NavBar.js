import React from "react";
import styles from '../css/unique/Navbar.module.css'
import NavItem from "../shared/NavItem";

const NavBar = () => {

  return (
    <nav className={styles.navbar}>
      <NavItem page='about' title='About' />
      <NavItem page='techstacks' title='Tech Stacks' />
      <NavItem page='professional-work' title='Professional Work' />
      <NavItem page='projects' title='Projects' />
      <NavItem page='contact' title='Contact Me' />
    </nav>
  )
}

export default NavBar
