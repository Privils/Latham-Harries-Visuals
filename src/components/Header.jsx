import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { IoCloseOutline } from 'react-icons/io5';
import '../App.css'

const Header = () => {
  return (
 <>
 <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">latham harriesr</a>
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">latham harries</h5>
        <button type="button" class="btn-close closeIcon" data-bs-dismiss="offcanvas" aria-label="Close">
        </button>
      </div>
      <div class="offcanvas-body bg-black"> 
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
         
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#portfolio">portfolio</a>
          </li>
         <li className='nav-item'>
            <a href="#about" className='nav-link text-white'>
               about
            </a>
         </li>
         <li className="nav-item">
            <a href="#services" className="nav-link text-white">
                services
            </a>
         </li>
         <li className="nav-item">
            <a href="#contact" className="nav-link text-white">
                contact
            </a>
         </li>
        
        </ul>
      </div>
    </div>
  </div>
</nav>
 </>
  )
}

export default Header
