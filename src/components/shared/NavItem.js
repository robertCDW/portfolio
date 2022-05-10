import React from "react";
import styles from '../css/shared/NavItem.module.css'
import { Link as LinkScroll } from "react-scroll/modules";

// const NavItem = ({ page, title }) => {
//   return <h2 className={ styles.navItem }
//       onClick={e => document.querySelector(`#${page}`).scrollIntoView({ behavior: 'smooth' })}
//       >
//         {title}
//       </h2>
// }

const NavItem = ({ page, title }) => {
  return (
      <LinkScroll
        className={ styles.navItem }
        to={page} >
        {title}
      </LinkScroll>)
}

export default NavItem
