import React from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* <img src="logo.png" alt="Company Logo" /> */}
          <h1>edu</h1>
        </div>
        <div className="footer-links">
          <a href="#about">Biz haqimizda</a>
          <a href="#services">Xizmatlar</a>
          <a href="#contact">Aloqa</a>
        </div>
        <div className="footer-social">
          <a
            href="https://t.me/smartbrain_it"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/smartbrain.it"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} SmartBrain Barcha huquqlar
          himoyalangan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
