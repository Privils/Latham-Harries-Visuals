import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { IoCloseOutline } from "react-icons/io5";
import "../App.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light navbar-fluid">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/Latham-Harries-Visuals">
            Latham Harris
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel text-white">
                Latham Harris
              </h5>
              <button
                type="button"
                className="btn-close closeIcon "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body bg-black">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="/Latham-Harries-Visuals"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#about">
                    about
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#portfolio">
                    portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#services">
                    services
                  </a>
                </li>
                <var>
                  {" "}
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#contact">
                      contact
                    </a>
                  </li>
                </var>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      
    
    </>
  );
};

export default Header;
