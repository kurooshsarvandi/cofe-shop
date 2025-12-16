import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./CustomFooter.css";

export default function CustomFooter() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-copy">
        © {new Date().getFullYear()} <strong>Kuroosh Sarvandi</strong> — All Rights Reserved
      </div>

      <div className="footer-icons">
        <a href="https://x.com/kuroosh" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i className="bi bi-twitter-x"></i>
        </a>

        <a href="https://facebook.com/kuroosh" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i className="bi bi-facebook"></i>
        </a>

        <a href="https://www.instagram.com/kuroosh.sarvandi7/?next=" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i className="bi bi-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7396857386906578945/" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i className="bi bi-linkedin"></i>
        </a>

        <a href="https://github.com/kurooshsarvandi" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i className="bi bi-github"></i>
        </a>

        <a href="https://kuroosh.dev" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i className="bi bi-globe2"></i>
        </a>
      </div>

      <div className="footer-designer">
        Designed by <span className="designer-name">Kuroosh Sarvandi</span>
      </div>
    </footer>
  );
}