import React, { useState } from 'react';
import '../assets/styles/navbar.css';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <>
      <div className="row" id="page_top" style={{ overflowX: "hidden" }}>
        <div className="col-md-10 offset-md-1 mt-3 navbar_bg">
          <nav className="navbar navbar-expand-lg w-100">
            <div className="container-fluid">
              <a href="#">
                <img 
                  src={`${process.env.PUBLIC_URL}/media/logo.png`} 
                  alt="Logo" 
                  className="logo_size" 
                />
              </a>
              <button 
                className="navbar-toggler" 
                type="button" 
                onClick={toggleNav}
              >
                <span>
                  <i className="fa-solid fa-bars-staggered nav_toggler"></i>
                </span>
              </button>

              <div className="collapse offset-md-4 navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link nav_text btn btn_effect" href="#abt_me">
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav_text btn btn_effect" href="#bio">
                      My Bio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className="nav-link nav_text btn btn_effect" 
                      href="#contact"
                    >
                      Contact Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav_text btn btn_effect" href="#project">
                      My Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        id="myNav" 
        className="overlay" 
        style={{ width: navOpen ? "100%" : "0%" }}
      >
        <a 
          href="#!" 
          className="closebtn" 
          onClick={closeNav}
        >
          &times;
        </a>

        <div className="overlay-content">
          <a href="#contact" className="btn_effect" onClick={closeNav}>
            Contact Me
          </a>
          <a href="#abt_me" className="btn_effect" onClick={closeNav}>
            About Me
          </a>
          <a href="#bio" className="btn_effect" onClick={closeNav}>
            My Bio
          </a>
          <a href="#project" className="btn_effect" onClick={closeNav}>
            Projects
          </a>
        </div>
      </div>
    </>
  );
}