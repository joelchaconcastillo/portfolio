// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LeetCodeIcon from "../icons/leetcode";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(d => !d);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/research", label: "Research" },
    { path: "/achievements", label: "Achievements" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#f6f7f8] dark:bg-[#0f172a] font-display border-b border-gray-200 dark:border-[#233648]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <NavLink to="/" className="text-lg font-bold text-gray-900 dark:text-white no-underline">
          JC
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm items-center">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `no-underline ${isActive ? "text-primary" : "text-gray-600 dark:text-white"}`
              }
            >
              {label}
            </NavLink>
          ))}

          <a
            href="mailto:joelchaconcastillo@gmail.com"
            className="no-underline ml-4 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:opacity-90"
          >
            Contact
          </a>
        </nav>

        {/* Socials + toggle + burger */}
        <div className="flex items-center gap-3">
          {/* Desktop socials */}
          <div className="hidden md:flex items-center gap-4 text-xl">
            <a
              href="https://www.linkedin.com/in/joel-chacon-castillo-351bb4194/"
              target="_blank"
              rel="noreferrer"
              className="text-[#92adc9] hover:text-white"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/joelchaconcastillo"
              target="_blank"
              rel="noreferrer"
              className="text-[#92adc9] hover:text-white"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://leetcode.com/u/joelchacon/"
              target="_blank"
              rel="noreferrer"
              className="text-[#92adc9] hover:text-white"
            >
              <LeetCodeIcon />
            </a>
          </div>

          {/* Dark / Light toggle */}
          <button
            onClick={toggleTheme}
            className="material-symbols-outlined text-xl select-none text-gray-900 dark:text-white"
          >
            {dark ? "light_mode" : "dark_mode"}
          </button>

          {/* Mobile burger / close */}
          <button
            className="material-symbols-outlined md:hidden text-2xl select-none text-gray-900 dark:text-white"
            onClick={() => setOpen(o => !o)}
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-300 dark:border-gray-700 px-6 py-3 space-y-4 text-sm bg-[#f6f7f8] dark:bg-[#0f172a]">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `no-underline block ${isActive ? "text-primary" : "text-gray-600 dark:text-white"}`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Mobile socials */}
          <div className="flex gap-4 pt-2 text-xl">
            <a
              href="https://www.linkedin.com/in/joel-chacon-castillo-351bb4194/"
              target="_blank"
              rel="noreferrer"
              className="text-[#92adc9] hover:text-white"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/joelchaconcastillo"
              target="_blank"
              rel="noreferrer"
              className="text-[#92adc9] hover:text-white"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://leetcode.com/u/joelchacon/"
              target="_blank"
              rel="noreferrer"
              className="text-[#92adc9] hover:text-white"
            >
              <LeetCodeIcon />
            </a>
          </div>

          <a
            href="mailto:joelchaconcastillo@gmail.com"
            className="no-underline block mt-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold text-center hover:opacity-90"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
