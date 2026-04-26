import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Portfolio from './components/Portfolio';
import ProjectInMind from './components/ProjectInMind';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Logika Scroll Up menggantikan fungsi scrollUp() di main.js
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) setShowScroll(true);
      else setShowScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      
      <main className="main">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Qualification />
        <Achievements />
        <Certificates />
        <Projects />
        <Portfolio />
        <ProjectInMind />
        <Contact />
      </main>

      <Footer />

      <a href="#" className={`scrollup ${showScroll ? 'show-scroll' : ''}`} id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </>
  );
}

export default App;