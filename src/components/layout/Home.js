import React from "react";

import NavBar from './NavBar';
import About from '../pages/About';
import TechStacks from '../pages/TechStacks';
import Projects from '../pages/Projects';
import ProfessionalWork from '../pages/ProfessionalWork';

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
      </main>
    </>
  )
}

export default Home
