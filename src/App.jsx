// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

import IconContainer from './components/NavButton/NavButton';
import Navbar from './components/Navbar/navbar';

const App = () => {
  return (
    <div className="App">
      <div>
        <p>App</p>
        <p>Esse é meu app</p>
      </div>
      <div className='navbar-page-container'>
        <Navbar />
      </div>
    </div>
  );
};

export default App;