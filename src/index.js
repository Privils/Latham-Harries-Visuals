import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Events from './components/Events';
import Sports from './components/Sports';
import ClubPic from './components/ClubPic';
import Home from './components/Home';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/ClubPic" element={<ClubPic />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
