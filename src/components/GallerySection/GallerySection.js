import React, { useState, useEffect } from 'react';
import './GallerySection.css';

function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(0);

  // عکس‌های background برای اسلایدشو
  const backgroundSlides = [
    "/photo/costom.back1.jpg",
   "/photo/costom.back2.jpg", 
    "/photo/costom.back3.jpg",
    "/photo/costom.back4.jpg"
  ];

  // عکس‌های نمونه از مشتریان - با localStorage
  const [customerPhotos, setCustomerPhotos] = useState(() => {
    const saved = localStorage.getItem('cafeRizvanGallery');
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        url: "photo/customer1.jpg",
        customerName: "سارا",
        caption: "عصر دل‌انگیز در کافه ریژوان ☕",
        likes: 42,
        date: "۱۴۰۲/۱۰/۱۵",
        position: { top: "10%", left: "5%", rotation: -2 }
      },
      {
        id: 2,
        url: "photo/customer3.jpg", 
        customerName: "امیر",
        caption: "بهترین لاته عمرم رو اینجا خوردم!",
        likes: 28,
        date: "۱۴۰۲/۱۰/۱۲",
        position: { top: "25%", left: "60%", rotation: 3 }
      },
      {
        id: 3,
        url: "photo/customer5.jpg",
        customerName: "نازنین",
        caption: "جشن تولد فوق‌العاده در ریژوان 🎂",
        likes: 67,
        date: "۱۴۰۲/۱۰/۱۰",
        position: { top: "50%", left: "20%", rotation: -1 }
      },
      {
        id: 4,
        url: "photo/customer4.jpg",
        customerName: "محمد",
        caption: "کتاب و قهوه، بهشت روی زمین! 📚",
        likes: 35,
        date: "۱۴۰۲/۱۰/۰۸",
        position: { top: "65%", left: "70%", rotation: 2 }
      },
      {
        id: 5,
        url: "photo/customer6.jpg",
        customerName: "فاطمه",
        caption: "دسرهای خوشمزه ریژوان 🍰",
        likes: 51,
        date: "۱۴۰۲/۱۰/۰۵",
        position: { top: "30%", left: "35%", rotation: -3 }
      },
    ];
  });

  const [uploadForm, setUploadForm] = useState({
    name: '',
    caption: '',
    image: null
  });

  // اسلایدشو background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundSlides.length]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // بررسی حجم فایل (حداکثر 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('حجم عکس باید کمتر از ۵ مگابایت باشد');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadForm({
          ...uploadForm,
          image: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitPhoto = (e) => {
    e.preventDefault();
    
    if (!uploadForm.image) {
      alert('لطفاً یک عکس انتخاب کنید');
      return;
    }

    // موقعیت تصادفی برای عکس جدید
    const randomPosition = {
      top: `${Math.random() * 70 + 10}%`,
      left: `${Math.random() * 70 + 10}%`,
      rotation: (Math.random() - 0.5) * 8
    };

    const newPhoto = {
      id: Date.now(),
      url: uploadForm.image,
      customerName: uploadForm.name || 'مشتری ناشناس',
      caption: uploadForm.caption || 'لحظه‌ای زیبا در کافه ریژوان',
      likes: 0,
      date: new Date().toLocaleDateString('fa-IR'),
      position: randomPosition
    };

    const updatedPhotos = [...customerPhotos, newPhoto];
    setCustomerPhotos(updatedPhotos);
    localStorage.setItem('cafeRizvanGallery', JSON.stringify(updatedPhotos));
    
    setUploadForm({
      name: '',
      caption: '',
      image: null
    });
    setShowUploadForm(false);
    
    alert('عکس شما با موفقیت آپلود شد! در گالری نمایش داده می‌شود.');
  };

  const handleLike = (id) => {
    const updatedPhotos = customerPhotos.map(photo => 
      photo.id === id ? { ...photo, likes: photo.likes + 1 } : photo
    );
    setCustomerPhotos(updatedPhotos);
    localStorage.setItem('cafeRizvanGallery', JSON.stringify(updatedPhotos));
  };

  const clearAllPhotos = () => {
    if (window.confirm('آیا از حذف تمام عکس‌ها اطمینان دارید؟')) {
      setCustomerPhotos([]);
      localStorage.removeItem('cafeRizvanGallery');
    }
  };

  return (
    <section 
      id="gallery" 
      className="gallery-section"
      style={{
        backgroundImage: `url(${backgroundSlides[currentBackground]})`
      }}
    >
      {/* Overlay شیشه‌ای */}
      <div className="glass-overlay"></div>
      
      <div className="gallery-container">
        
        {/* هدر گالری */}
        <div className="gallery-header">
          <h1 className="gallery-title">گالری مشتریان ریژوان</h1>
          <p className="gallery-subtitle">لحظات خوش شما در کنار ما</p>
          <div className="title-underline"></div>
          
          <div className="header-buttons">
            <button 
              className="upload-btn"
              onClick={() => setShowUploadForm(true)}
            >
              📸 عکس من رو هم اضافه کن!
            </button>
          </div>
        </div>

        {/* فرم آپلود عکس */}
        {showUploadForm && (
          <div className="upload-modal">
            <div className="upload-form-container glass-card">
              <div className="upload-header">
                <h3>عکس خودت رو با ما به اشتراک بذار</h3>
                <button 
                  className="close-btn"
                  onClick={() => setShowUploadForm(false)}
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleSubmitPhoto} className="upload-form">
                <div className="form-group">
                  <label>نام شما (اختیاری)</label>
                  <input
                    type="text"
                    value={uploadForm.name}
                    onChange={(e) => setUploadForm({...uploadForm, name: e.target.value})}
                    placeholder="نامت رو بنویس..."
                  />
                </div>
                
                <div className="form-group">
                  <label>توضیح عکس (اختیاری)</label>
                  <textarea
                    value={uploadForm.caption}
                    onChange={(e) => setUploadForm({...uploadForm, caption: e.target.value})}
                    placeholder="از تجربه‌ات در کافه ریژوان برامون بگو..."
                    rows="3"
                  />
                </div>
                
                <div className="form-group">
                  <label>عکس شما *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      required
                    />
                    <div className="upload-placeholder">
                      {uploadForm.image ? (
                        <div className="image-preview">
                          <img src={uploadForm.image} alt="Preview" />
                          <span>✅ عکس انتخاب شد</span>
                        </div>
                      ) : (
                        <span>📷 انتخاب عکس (حداکثر ۵MB)</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="form-actions">
                  <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={() => setShowUploadForm(false)}
                  >
                    انصراف
                  </button>
                  <button type="submit" className="submit-upload-btn">
                    آپلود عکس
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* گالری عکس‌ها با استایل نامرتب */}
        <div className="scattered-gallery">
          {customerPhotos.length === 0 ? (
            <div className="empty-gallery">
              <p>هنوز عکسی در گالری وجود ندارد!</p>
              <button 
                className="upload-btn"
                onClick={() => setShowUploadForm(true)}
              >
                اولین عکس رو اضافه کن
              </button>
            </div>
          ) : (
            customerPhotos.map(photo => (
              <div 
                key={photo.id} 
                className="scattered-photo"
                style={{
                  top: photo.position.top,
                  left: photo.position.left,
                  transform: `rotate(${photo.position.rotation}deg)`
                }}
                onClick={() => setSelectedImage(photo)}
              >
                <img src={photo.url} alt={photo.caption} />
                <div className="photo-badge">
                  <span className="customer-name">{photo.customerName}</span>
                  <span className="like-count">❤️ {photo.likes}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* دعوت به مشارکت */}
        <div className="cta-section glass-card">
          <h2>به خانواده ریژوان بپیوندید</h2>
          <p>عکس‌های خودتون رو با هشتگ <strong>#کافه_ریژوان</strong> در اینستاگرام به اشتراک بذارید</p>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/cafe_rizvan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-link"
            >
              📸 اینستاگرام ما
            </a>
          </div>
        </div>

      </div>

      {/* مدال نمایش عکس بزرگ */}
      {selectedImage && (
        <div className="image-modal">
          <div className="modal-content glass-card">
            <button 
              className="close-modal"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img src={selectedImage.url} alt={selectedImage.caption} />
            <div className="modal-info">
              <h4>{selectedImage.customerName}</h4>
              <p>{selectedImage.caption}</p>
              <div className="modal-actions">
                <button 
                  className="like-btn"
                  onClick={() => handleLike(selectedImage.id)}
                >
                  ❤️ {selectedImage.likes}
                </button>
                <span className="photo-date">{selectedImage.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GallerySection;