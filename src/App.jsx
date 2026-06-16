import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Importamos las hojas independientes
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

// Importamos el componente de la barra lateral
import SocialSidebar from './components/SocialSidebar'; 

export default function App() {
  return (
    <Router>
      {/* Barra lateral fija en toda la aplicación */}
      <SocialSidebar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}