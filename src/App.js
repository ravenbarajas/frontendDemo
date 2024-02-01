// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage'; // Adjust the import path as needed
import FAQs from './pages/faqs';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<FAQs />} />
      </Routes>
    </Router>
  );
}

export default App;
