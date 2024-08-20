import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Events from './components/Events';
import Sports from './components/Sports';
import ClubPics from './components/ClubPics';
import './index.css'

function App() {
  return (
   <>
   <Router basename='/Latham-Harries-Visuals'>
   <Header/>
   <Routes>
     <Route index element={<Home/>}/>
     <Route path='/' element={<Home/>}/>
     <Route path='/Events' element={<Events/>}/>
      <Route path='/Sports' element={<Sports/>}/>
      <Route path='/ClubPics' element={<ClubPics/>}/>
   </Routes> 
   </Router>
   </>
  );
}

export default App;
