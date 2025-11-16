import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Clock from './components/clock.jsx';
import Rain from './components/rain.jsx';
import Navbar from './components/navbar.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <div className="app">
      <Rain />
      <div className="logo1">Lim</div>
      <div className="logo2">Daniel</div>
      <div className="clock-wrapper">
        <Clock />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
