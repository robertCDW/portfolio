import React from 'react';
import './App.css';

// Layout components
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer'

// Page/Section components
import About from './components/pages/About';
import TechStacks from './components/pages/TechStacks';
import ContactMe from './components/pages/ContactMe';
import Projects from './components/pages/Projects';
import ProfessionalWork from './components/pages/ProfessionalWork';

// import { Routes, Route } from 'react-router-dom'

function App() {
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
      <Footer />
    </>
  );
}

export default App;
