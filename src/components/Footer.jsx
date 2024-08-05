import React from 'react';
import {
    FaEnvelope,
    FaPhone,
    FaInstagram,
    FaExternalLinkAlt,
    FaCamera,
    FaHeart
  } from "react-icons/fa";
import { Link } from 'react-router-dom';
  

const Footer = () => {
  return (
   <>
   <hr />
   <div className="footer">
    <div className="container">
        <div className="row">
            <div className="col-sm-12"> 
            <p class="copy-write">
      &copy;(2024)PrivilsWebDev. All Rights Reserved <FaHeart className='text-primary'/>
    </p>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Footer
