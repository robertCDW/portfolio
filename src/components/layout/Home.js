import React, { useEffect, useState } from "react";

import NavBar from './NavBar';
import About from '../pages/About';
import TechStacks from '../pages/TechStacks';
import Projects from '../pages/Projects';
import ProfessionalWork from '../pages/ProfessionalWork';
import Background from '../pages/Background';
import ContactMe from "../pages/ContactMe";

const Home = () => {

  const handleResize = () => {
    setWindowSize(window.innerWidth)
  } 

  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [smallDeviceSize] = useState(600)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* makes the banner disappear on screens smaller than 600 pixels */}
      {windowSize > smallDeviceSize && 
        <header>
          <NavBar windowSize={windowSize}/>
        </header>}
      <main style={{ 
          marginLeft: windowSize > smallDeviceSize ? '20vw' : '0',
          padding: '5rem 2rem 0 2rem'
        }}>
        <About />
        <TechStacks />
        <ProfessionalWork />
        <Projects />
        <Background />
        <ContactMe />
      </main>
    </>
  )
}

export default Home
