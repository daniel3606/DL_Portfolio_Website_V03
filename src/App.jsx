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
import ProjectDetail1 from './pages/ProjectDetail1.jsx';
import ProjectDetail2 from './pages/ProjectDetail2.jsx';
import ProjectDetail3 from './pages/ProjectDetail3.jsx';
import ProjectDetail4 from './pages/ProjectDetail4.jsx';
import ProjectDetail5 from './pages/ProjectDetail5.jsx';
import ProjectDetail6 from './pages/ProjectDetail6.jsx';

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
        <Route path="/projects/project-1" element={<ProjectDetail1 />} />
        <Route path="/projects/project-2" element={<ProjectDetail2 />} />
        <Route path="/projects/project-3" element={<ProjectDetail3 />} />
        <Route path="/projects/project-4" element={<ProjectDetail4 />} />
        <Route path="/projects/project-5" element={<ProjectDetail5 />} />
        <Route path="/projects/project-6" element={<ProjectDetail6 />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
