import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'

// Layout components
import Home from './components/layout/Home'

// Page/Section components
import TherrProject from './components/projects/TherrProject';
import NetflixProject from './components/projects/NetflixProject';
import DayPlannerProject from './components/projects/DayPlannerProject';
import SpeedReadProject from './components/projects/SpeedReadProject';
import MapEscape from './components/projects/MapEscape'
import UtBackground from './components/projects/Ut'
import ArmyBackground from './components/projects/Army';
import CdwBackground from './components/projects/Cdw';
import GenAssemblyBackground from './components/projects/GenAssembly';

function App() {

  // const [scrollY, setScrollY] = useState(0)
  // const [shouldScroll, setShouldScroll] = useState(false)

  // // starts at home, scrollY needs to be updated by event listener in home, should scroll should be false
  // // when you go to another page, scrollY should be stored
  // // when you return home, shouldScroll is set to true and is used by home, scrolls to scrollY position
  // const returnToHome = () => {
    // console.log(window.scrollY)
  // }

  return (
    <>
      <Routes>
        {/* home */}
        <Route path='/' element={<Home />} />
        <Route path='/portfolio/' element={<Home />} />

        {/* professional projects */}
        <Route path='/project/therr' element={<TherrProject />} />

        {/* personal projects */}
        <Route path='/project/netflix' element={<NetflixProject />} />
        <Route path='/project/mapescape' element={<MapEscape />} />
        <Route path='/project/dayplanner' element={<DayPlannerProject />} />
        <Route path='/project/speedreader' element={<SpeedReadProject />} />

        {/* related experience */}
        <Route path='/project/genassembly' element={<GenAssemblyBackground />} />
        <Route path='/project/neteng-cdw' element={<CdwBackground />} />
        <Route path='/project/it-army' element={<ArmyBackground />} />
        <Route path='/project/degree-ut' element={<UtBackground />} />
      </Routes>
    </>
  );
}

export default App;
