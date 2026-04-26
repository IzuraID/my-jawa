import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Randi Dwi Nur Cahyo</h1>
            <span className="footer__subtitle">IT Enthusiast</span>
          </div>

          <ul className="footer__links">
            <li><a href="#services" className="footer__link">Services</a></li>
            <li><a href="#portfolio" className="footer__link">Blog</a></li>
            <li><a href="#contact" className="footer__link">Contact</a></li>
          </ul>

          <div className="footer__socials">
            <a href="#" target="_blank" rel="noreferrer" className="footer__social">
              <i className="uil uil-facebook"></i>
            </a>
            <a href="https://www.instagram.com/ran.izura/" target="_blank" rel="noreferrer" className="footer__social">
              <i className="uil uil-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="footer__social">
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; ran.izura. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;