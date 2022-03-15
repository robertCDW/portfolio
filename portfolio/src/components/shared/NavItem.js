import React from "react";

const NavItem = ({ page, title }) => {
  return <h2 
      onClick={e => document.querySelector(`#${page}`).scrollIntoView({ behavior: 'smooth' })}
      style={{ color: 'white', marginBottom: '3rem', fontSize: 'min(3vw, 2.3rem)' }}
      >
        {title}
      </h2>
}

export default NavItem
