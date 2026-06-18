import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership'; // <-- IMPORTANTE
import About from './pages/About';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="leadership" element={<Leadership />} /> {/* <-- NUEVA RUTA */}
          <Route path="about" element={<About />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}