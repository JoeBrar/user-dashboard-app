import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userDetails" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};


export default App;