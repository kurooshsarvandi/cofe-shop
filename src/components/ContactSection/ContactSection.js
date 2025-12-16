import React, { useState } from 'react';
import './ContactSection.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    date: '',
    time: '',
    phone: '',
    specialRequest: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', 
    '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // اینجا می‌تونی اطلاعات رو به سرور بفرستی
    console.log('اطلاعات رزرو:', formData);
    setIsSubmitted(true);
    
    // ریست کردن فرم بعد از 3 ثانیه
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        guests: '',
        date: '',
        time: '',
        phone: '',
        specialRequest: ''
      });
    }, 3000);
  };

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="contact-section">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h2>رزرو شما ثبت شد!</h2>
          <p>به زودی با شما تماس می‌گیریم</p>
          <div className="reservation-details">
            <p><strong>نام:</strong> {formData.name}</p>
            <p><strong>تعداد مهمانان:</strong> {formData.guests} نفر</p>
            <p><strong>تاریخ:</strong> {formData.date}</p>
            <p><strong>ساعت:</strong> {formData.time}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* هدر بخش */}
        <div className="contact-header">
          <h1 className="contact-title">رزرو میز</h1>
          <p className="contact-subtitle">لحظات خاص خود را در کافه ریژوان ثبت کنید</p>
          <div className="title-underline"></div>
        </div>

        {/* فرم رزرو */}
        <div className="reservation-form-container">
          <form className="reservation-form" onSubmit={handleSubmit}>
            
            {/* ردیف اول: نام و تعداد مهمانان */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">نام و نام خانوادگی *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="نام خود را وارد کنید"
                />
              </div>

              <div className="form-group">
                <label htmlFor="guests">تعداد مهمانان *</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="">انتخاب کنید</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>
                      {num} نفر
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* ردیف دوم: تاریخ و ساعت */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">تاریخ *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={getTodayDate()}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">ساعت *</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">انتخاب ساعت</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* شماره تماس */}
            <div className="form-group full-width">
              <label htmlFor="phone">شماره تماس *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="09xxxxxxxxx"
                pattern="[0-9]{11}"
              />
            </div>

            {/* درخواست ویژه */}
            <div className="form-group full-width">
              <label htmlFor="specialRequest">درخواست ویژه (اختیاری)</label>
              <textarea
                id="specialRequest"
                name="specialRequest"
                value={formData.specialRequest}
                onChange={handleChange}
                rows="4"
                placeholder="درخواست خاصی دارید؟ مثلاً جشن تولد، ملاقات کاری و..."
              />
            </div>

            {/* دکمه ارسال */}
            <button type="submit" className="submit-btn">
              رزرو میز
            </button>

          </form>

          {/* اطلاعات تماس */}
          <div className="contact-info">
            <h3>اطلاعات تماس</h3>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <p>شماره تماس</p>
                <strong>۰۲۱-۱۲۳۴۵۶۷۸</strong>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🕒</span>
              <div>
                <p>ساعات کاری</p>
                <strong>۸:۰۰ تا ۲۲:۰۰</strong>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <p>آدرس</p>
                <strong>تهران، پاکدشت ,خیابان مطهری ,کوچه لاله</strong>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;