// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">Joel Chacon</strong> <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="social-links d-flex justify-content-center">
          <a href="https://www.linkedin.com/in/joel-chacon-castillo-351bb4194/" target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a>
          <a href="https://github.com/joelchaconcastillo" target="_blank" className="github"><i className="bi bi-github"></i></a>
          <a href="https://leetcode.com/u/joelchacon/" target="_blank" className="leetcode"><i className="bi bi-github"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
