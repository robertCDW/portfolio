import React from "react";

import NavBar from './NavBar';
import About from '../pages/About';
import TechStacks from '../pages/TechStacks';
import Projects from '../pages/Projects';
import ProfessionalWork from '../pages/ProfessionalWork';
import ContactMe from "../pages/ContactMe";

const Home = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main style={{ marginLeft: '20vw'}}>
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
