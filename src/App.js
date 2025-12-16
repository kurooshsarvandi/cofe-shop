import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import HomeSection from './Home/HomeSection';
import MenuSection from './components/MenuSection/MenuSection';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import GallerySection from './components/GallerySection/GallerySection';
import CustomFooter from './components/CustomFooter/CustomFooter';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <Navigation
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
      
      <section id="home">
        <HomeSection />
      </section>
      
      <section id="menu">
        <MenuSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="gallery">
        <GallerySection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      <section id="">
        <CustomFooter/>
      </section>
    </div>  
  );
}

export default App