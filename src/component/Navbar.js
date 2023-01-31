import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg my-3">
        <div className="container-fluid mx-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  mx-3">
              <li className="nav-item mx-5">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item mx-5"><NavLink to="service">Services</NavLink></li>
              <li className="nav-item mx-5">Blogs</li>
              <li className="nav-item mx-5">Awards</li>
              <li className="nav-item mx-5"> <NavLink to="about">About Me </NavLink></li>
              <li className="nav-item mx-5">
                <NavLink to="contacts">Contact Me</NavLink>
              </li>
              <li className="nav-item mx-5"> <a href="https://www.fiver.com/kushal913">Hire Me</a></li>
              <li className="nav-item mx-5"><NavLink to="cv">Cv</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
