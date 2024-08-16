import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Events from './components/Events';
import Sports from './components/Sports';
import ClubPic from './components/ClubPic';

function App() {
  return (
   <>
   <Router>
   <Header/>
   <Routes>
     <Route index element={<Home/>}/>
     <Route path='/' element={<Home/>}/>
     <Route path='/Events' element={<Events/>}/>
      <Route path='/Sports' element={<Sports/>}/>
      <Route path='/ClubPic' element={<ClubPic/>}/>
   </Routes>
   </Router>
   </>
  );
}

export default App;
