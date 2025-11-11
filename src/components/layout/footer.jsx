// src/components/Footer.jsx
import React from "react";
import LeetCodeIcon from "../icons/leetcode";

const Footer = () => {
  return (
    <footer className="text-center py-10 mt-12 border-t border-solid border-t-[#233648] bg-[#f6f7f8] dark:bg-[#0f172a]">
      
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4 text-xl">
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
          href="https://scholar.google.com/citations?user=zZpJfLsAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
          className="text-[#92adc9] hover:text-white"
        >
          <i className="bi bi-mortarboard"></i>
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

      {/* Copyright */}
      <p className="text-[#92adc9] text-sm">
        © 2025 Joel Chacon Castillo. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
