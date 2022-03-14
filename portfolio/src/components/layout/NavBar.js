import React from "react";

const NavBar = () => {
  return (
    <nav style={{ position: 'fixed', width: '20vw', height: '100vh', borderStyle: 'solid' }}>
      <h2>Robert Scales Dev</h2>
      <h2 onClick={e => {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth', block: 'center' })
      }}>About</h2>
      <h2 onClick={e => {
        document.querySelector('#techstacks').scrollIntoView({ behavior: 'smooth', block: 'center' })
      }}>Tech Stacks</h2>
      <h2 onClick={e => {
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth', block: 'center' })
      }}>Projects</h2>
      <h2 onClick={e => {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'center' })
      }}>Contact Me</h2>
    </nav>
  )
}

export default NavBar
