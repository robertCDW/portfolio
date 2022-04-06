import React from "react";
import styles from '../css/shared/NavItem.module.css'

const NavItem = ({ page, title }) => {
  return <h2 className={ styles.navItem }
      onClick={e => document.querySelector(`#${page}`).scrollIntoView({ behavior: 'smooth' })}
      style={{  }}
      >
        {title}
      </h2>
}

export default NavItem
