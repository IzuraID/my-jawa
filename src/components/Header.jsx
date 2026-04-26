import React, { useState, useEffect } from 'react';

const Header = () => {
  /* ==================== STATE ==================== */
  // 1. Toggle Menu Mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Ubah Background Header saat Scroll
  const [scrollHeader, setScrollHeader] = useState(false);

  // 3. Dark/Light Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  /* ==================== EFFECTS ==================== */
  // Menggantikan fungsi scrollHeader() di main.js
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) setScrollHeader(true);
      else setScrollHeader(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menggantikan logika LocalStorage Tema di main.js
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selected-theme");
    if (selectedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-theme");
    }
  }, []);

  /* ==================== HANDLERS ==================== */
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("selected-theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("selected-theme", "light");
    }
  };

  /* ==================== RENDER ==================== */
  return (
    <header className={`header ${scrollHeader ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Randi Dwi Nur Cahyo</a>
        
        {/* Menambahkan class 'show-menu' jika isMenuOpen bernilai true */}
        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={closeMenu}>
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={closeMenu}>
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={closeMenu}>
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link" onClick={closeMenu}>
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link" onClick={closeMenu}>
                <i className="uil uil-scenery nav__icon"></i>Blog
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={closeMenu}>
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          
          {/* Tombol Tutup Menu (X) */}
          <i className="uil uil-times nav__close" onClick={closeMenu}></i>
        </div>

        <div className="nav__btns">
          {/* Tombol Ubah Tema (Bulan/Matahari) */}
          <i 
            className={`uil change-theme ${isDarkMode ? 'uil-sun' : 'uil-moon'}`} 
            id="theme-button"
            onClick={toggleTheme}
          ></i>

          {/* Tombol Buka Menu (Mobile) */}
          <div className="nav__toggle" onClick={toggleMenu}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;