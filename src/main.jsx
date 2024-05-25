// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import NotFound from './pages/NotFound';
import './styles/global.css';
import './styles/variables.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/contact",
    element: <ContactMe />,
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);