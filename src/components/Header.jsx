import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
    <section id="nav-bar">
  <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
     <p class="logo">Elegance</p>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link btn-danger" href="/Latham-Harries-Visuals">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">about us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#products">products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="shop.html">shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
  </>
  )
}

export default Header
