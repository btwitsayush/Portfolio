import React from 'react';
import "../../styles/Footer.css";
// More specific imports
import { FaGithub, FaLinkedin, FaCode, FaBriefcase } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <a href="https://github.com/btwitsayush" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/-ayush-srivastava" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://leetcode.com/u/btwitsayush/" target="_blank" rel="noopener noreferrer">
          <FaCode className="footer-icon" />
        </a>
        <a href="https://www.naukri.com/code360/profile/btwitsayush" target="_blank" rel="noopener noreferrer">
          <FaBriefcase className="footer-icon" />
        </a>
      </div>
      <div className="footer-right">
        <p className="footer-text">Built with ❤️ & passion | Crafted by &copy;
        Ayush Srivastava</p>
      </div>
    </footer>
  );
};

export default Footer; 