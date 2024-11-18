import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const restrictedPaths = ['/events', '/clubPics', '/sports'];

  return (
    <nav className="navbar navbar-expand-lg" >
      <div className="container-fluid">
        <p className="navbar-brand logo text-white">lathamharris visuals</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {location.pathname !== '/' && (
              <li className="nav-item">
                <Link className="nav-link active btn-danger" to="/">
                  Home
                </Link>
              </li>
            )}
            {!restrictedPaths.includes(location.pathname) && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu bg-black">
                    <li>
                      <Link className="dropdown-item" to="/sports">Sports</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/events">Events</Link> 
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/clubPics">Club</Link>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
