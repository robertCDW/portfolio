import React, { useEffect, useState } from "react";

import NavBar from './NavBar';
import About from '../pages/About';
import TechStacks from '../pages/TechStacks';
import Projects from '../pages/Projects';
import ProfessionalWork from '../pages/ProfessionalWork';
import ContactMe from "../pages/ContactMe";
import Spacer from "./Spacer";

const Home = () => {

  const handleResize = () => {
    setWindowSize(window.innerWidth)
  } 

  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [smallDeviceSize] = useState(1000)

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
          marginLeft: windowSize > smallDeviceSize ? '20vw' : '0'
        }}>
        <Spacer height={'5'} />
        <About />
        <TechStacks />
        <ProfessionalWork />
        <Projects />
        <ContactMe />
      </main>
    </>
  )
}

export default Home
