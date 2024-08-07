import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Events from './components/Events';
import Sports from './components/Sports';
import ClubPic from './components/ClubPic';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router basename='/Latham-Harries-Visuals'>
    <Header/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/Latham-Harries-Visuals' element={<Home/>}/>
      <Route path='/Events' element={<Events/>}/>
      <Route path='/Sports' element={<Sports/>}/>
      <Route path='/ClubPic' element={<ClubPic/>}/>
    </Routes>
    <Footer />
   </Router>
  </React.StrictMode>
);
