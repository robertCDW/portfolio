import React from 'react';
import './App.css';

// Layout components
import Home from './components/layout/Home'

// Page/Section components
import TherrProject from './components/projects/TherrProject';
import MusicflixProject from './components/projects/MusicflixProject';
import DayPlannerProject from './components/projects/DayPlannerProject';
import SpeedReadProject from './components/projects/SpeedReadProject';
import JiraProject from './components/projects/JiraProject'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio/' element={<Home />} />
        <Route path='/project/therr' element={<TherrProject />} />
        <Route path='/project/musicflix' element={<MusicflixProject />} />
        <Route path='/project/dayplanner' element={<DayPlannerProject />} />
        <Route path='/project/speedreader' element={<SpeedReadProject />} />
        <Route path='/project/jira' element={<JiraProject />} />
      </Routes>
    </>
  );
}

export default App;
