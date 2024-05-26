// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Home from './pages/HomePage';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import NotFound from './pages/NotFound';

import './styles/global.css';
import './styles/variables.css';

const Main = () => (
  <Router basename='/'>
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

