// src/Home/HomeSection.js
import React from 'react';
import './HomeSection.css';

function HomeSection() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      // اسکرول نرم به بخش منو
      menuSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="home-section">
      
      {/* ویدیو background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="background-video"
      >
        <source src="/videos/cafe-background.mp4" type="video/mp4" />
        مرورگر شما از ویدیو پشتیبانی نمی‌کند
      </video>

      {/* لایه overlay برای خوانایی متن */}
      <div className="video-overlay"></div>

      {/* محتوای متن */}
      <div className="home-content">
        <h1 className="home-title">
          Welcome to Rizhvan
        </h1>
        <p className="home-subtitle">
          مهمان‌نوازی اصیل ایرانی در دل یک کافه مدرن
        </p>
        <button 
          className="cta-button" 
          onClick={scrollToMenu}
        >
          مشاهده منوی کامل
        </button>
      </div>

    </section>
  );
}

export default HomeSection;