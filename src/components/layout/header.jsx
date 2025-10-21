import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center light-background sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        {/* Logo */}
        <NavLink to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Joel Chacon</h1>
        </NavLink>

        {/* Navigation Menu */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" className={({ isActive }) => (isActive ? "active" : "")}>
                Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/research" className={({ isActive }) => (isActive ? "active" : "")}>
                Research
              </NavLink>
            </li>
            <li>
              <NavLink to="/achievements" className={({ isActive }) => (isActive ? "active" : "")}>
                Achievements
              </NavLink>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        {/* Social Links */}
        <div className="header-social-links">
          <a
            href="https://www.linkedin.com/in/joel-chacon-castillo-351bb4194/"
            target="_blank"
            className="linkedin"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/joelchaconcastillo"
            target="_blank"
            className="github"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://leetcode.com/u/joelchacon/"
            target="_blank"
            className="leetcode leetcode-link"
            rel="noreferrer"
          >
          {/* Custom LeetCode SVG - Grayscale */}
          <svg
            width="18"
            height="22"
            viewBox="0 0 95 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
              fill="#888888"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
              fill="#AAAAAA"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
              fill="#CCCCCC"
            ></path>
          </svg>

          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
