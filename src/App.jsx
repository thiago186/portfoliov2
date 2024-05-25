// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

import IconContainer from './components/NavButton/NavButton';
import Navbar from './components/Navbar/navbar';

const App = () => {
  return (
    <div className="App">
      <div className='icon-container'>
        <IconContainer label='Teste' icon='src/assets/icons/home.svg' selected={false} />
        <a>testeee</a>
      </div>
      {/* <div className='navbar-page-container'>
        <Navbar />
      </div> */}
      <a>test</a>
      <Outlet />
    </div>
  );
};

export default App;