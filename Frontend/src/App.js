import { useState } from 'react';
import './App.css';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SinglePlace from './components/SinglePlace/SinglePlace';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/places/:id" element={<SinglePlace />} />
      </Routes>
    </Router>
  );
}

export default App;
