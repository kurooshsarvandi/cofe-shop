

import React, { useState, useEffect } from 'react';
import './AboutSection.css';

function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  // داده‌های اسلایدها
  const slides = [
    {
      image: "/photo/cofee.jpg",
      alt: "تاسیس کافه ریژوان"
    },
    {
      image: "/photo/work.jpg", 
      alt: "فضای داخلی کافه"
    },
    {
      image: "/photo/Essperso.jpg",
      alt: "تیم کافه ریژوان"
    },
    {
      image: "/photo/scope.jpg",
      alt: "مشتریان کافه"
    }
  ];

  // متن تایپ شونده
  const fullText = `به کافه ریژوان خوش آمدید... 
  از سال ۱۴۰۰، ما با عشق به قهوه و مهمان‌نوازی شروع کردیم.
  اینجا فقط یک کافه نیست، خانه دوم شماست.
  ما بهترین دانه‌های قهوه را از سراسر جهان انتخاب می‌کنیم
  و با عشق برای شما آماده می‌سازیم.`;

  // اتوماتیک اسلایدها
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // تایپ کردن متن
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText]);

  // تغییر اسلاید دستی
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* هدر بخش */}
        <div className="about-header">
          <h1 className="about-title">About us</h1>
          <div className="title-underline"></div>
        </div>

        {/* محتوای اصلی */}
        <div className="about-content">
          
          {/* اسلایدشو عکس‌ها */}
          <div className="slideshow-section">
            <div className="slideshow-container">
              
              {/* عکس فعلی */}
              <div className="slide active">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].alt}
                  className="slide-image"
                />
              </div>

              {/* دکمه‌های کنترل */}
              <button className="slide-btn prev-btn" onClick={prevSlide}>
                ‹
              </button>
              <button className="slide-btn next-btn" onClick={nextSlide}>
                ›
              </button>

              {/* نقاط نشانگر */}
              <div className="slide-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* متن تایپ شونده */}
          <div className="text-section">
            <div className="text-container">
              <h2 className="story-title">داستان کافه ریژوان</h2>
              <div className="typewriter-text">
                {displayText}
                <span className="cursor">|</span>
              </div>
              
              {/* اطلاعات اضافی */}
              <div className="story-features">
                <div className="feature">
                  <span className="feature-icon">🌱</span>
                  <div className="feature-text">
                    <h4>تازه و طبیعی</h4>
                    <p>استفاده از بهترین مواد اولیه</p>
                  </div>
                </div>
                
                <div className="feature">
                  <span className="feature-icon">👨‍🍳</span>
                  <div className="feature-text">
                    <h4>تیم حرفه‌ای</h4>
                    <p>باریساهای با تجربه</p>
                  </div>
                </div>
                
                <div className="feature">
                  <span className="feature-icon">❤️</span>
                  <div className="feature-text">
                    <h4>ساخته شده با عشق</h4>
                    <p>در هر فنجان عشق می‌ریزیم</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;