import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import ProjectsLayout from './pages/ProjectsLayout';
import ProjectsDetailing from './components/ProjectsDetailing';
import NotFound from './components/NotFound';
import './styles/App.css';
import './styles/fonts.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="category/:id" element={<ProjectsLayout />}/>
         
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
