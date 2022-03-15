import React from 'react';
import './App.css';

// Layout components
import Home from './components/layout/Home'

// Page/Section components
import CaseStudy from './components/pages/CaseStudy'
import ContactMe from './components/pages/ContactMe';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:id' element={<CaseStudy />} />
      </Routes>
      <ContactMe />
    </>
  );
}

export default App;
