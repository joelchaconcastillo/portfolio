import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import LeetCodeIcon from "../icons/leetcode";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header d-flex align-items-center light-background sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

        {/* Logo */}
        <NavLink to="/" className="logo d-flex align-items-center me-auto me-xl-0" />

        {/* Navigation */}
        <nav id="navmenu" className={`navmenu ${isOpen ? "navmenu-active" : ""}`}>
          
          {/* CLOSE MENU WHEN CLICK A LINK */}
          <ul onClick={() => setIsOpen(false)}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/work">Work</NavLink></li>
            <li><NavLink to="/research">Research</NavLink></li>
            <li><NavLink to="/achievements">Achievements</NavLink></li>
          </ul>

          {/* Toggle Button */}
          <i
            className={`mobile-nav-toggle d-xl-none bi ${isOpen ? "bi-x" : "bi-list"}`}
            onClick={() => setIsOpen(v => !v)}
            style={{ cursor: "pointer" }}
          ></i>
        </nav>

        {/* Social Links */}
        <div className="header-social-links d-flex align-items-center">
          <a href="https://www.linkedin.com/in/joel-chacon-castillo-351bb4194/" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/joelchaconcastillo" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://leetcode.com/u/joelchacon/" target="_blank" rel="noreferrer">
          <LeetCodeIcon/>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
