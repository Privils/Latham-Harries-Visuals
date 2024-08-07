import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
    FaEnvelope,
    FaPhone,
    FaInstagram,
    FaExternalLinkAlt,
    FaCamera,
    FaHeart
  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../App.css";
  

const Footer = () => {
  return (
   <>
 <div className='my-4 bg-red container-fluid d-flex'>
 <p class="copy-write text-center bg-red">
      &copy;(2024)PrivilsWebDev. All Rights Reserved <FaHeart className='text-primary'/>
    </p>
 </div>
   </>
  )
}

export default Footer
