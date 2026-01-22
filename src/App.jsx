import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Clock from './components/clock.jsx';
import Navbar from './components/navbar.jsx';
import Cursor from './components/cursor.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import ProjectDetailArtFit from './pages/ProjectDetailArtFit.jsx';
import ProjectDetailPortfolio from './pages/ProjectDetailPortfolio.jsx';
import ProjectDetailSideQuest from './pages/ProjectDetailSideQuest.jsx';
import ProjectDetailSpectacles from './pages/ProjectDetailSpectacles.jsx';
import ProjectDetailARHairStudio from './pages/ProjectDetailARHairStudio.jsx';
import ProjectDetailScribbleAI from './pages/ProjectDetailScribbleAI.jsx';
import ProjectDetailKelseyMuseum from './pages/ProjectDetailKelseyMuseum.jsx';

function App() {
  return (
    <div className="app">
      <Cursor />
      {/* <Rain /> */}
      <div className="logo1">Daniel</div>
      <div className="logo2">Lim</div>
      <div className="clock-wrapper">
        <Clock />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/artfit" element={<ProjectDetailArtFit />} />
        <Route path="/projects/portfolio" element={<ProjectDetailPortfolio />} />
        <Route path="/projects/sidequest" element={<ProjectDetailSideQuest />} />
        <Route path="/projects/spectacles" element={<ProjectDetailSpectacles />} />
        <Route path="/projects/ar-hair-studio" element={<ProjectDetailARHairStudio />} />
        <Route path="/projects/scribble-ai" element={<ProjectDetailScribbleAI />} />
        <Route path="/projects/kelsey-museum" element={<ProjectDetailKelseyMuseum />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
