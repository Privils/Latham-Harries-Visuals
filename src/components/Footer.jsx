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
 <div className='my-4 container-fluid'>
 <p class="copy-write text-center">
      &copy;(2024)PrivilsWebDev. All Rights Reserved <FaHeart className='text-primary'/>
    </p>
 </div>
   </>
  )
}

export default Footer
