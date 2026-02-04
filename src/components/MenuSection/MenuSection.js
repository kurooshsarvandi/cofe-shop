import React, { useState } from "react";
import styles from "./MenuSection.module.css"; 

import {
  FaCoffee,
  FaSnowflake,
  FaFire,
  FaIceCream,
  FaCocktail,
  FaLeaf,
  FaAppleAlt,
  FaPizzaSlice,
  FaUtensils,
  FaHamburger,
  FaBirthdayCake,
  FaBacon,
  FaGlassMartiniAlt,
} from "react-icons/fa";

function MenuSection() {
  // حالت اولیه: همه کارت‌ها بسته هستند
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const toggleCard = (index) => {
    // اگر روی کارت فعال کلیک شود، آن را می‌بندیم
    // اگر روی کارت غیرفعال کلیک شود، آن را باز می‌کنیم و قبلی را می‌بندیم
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <div className={styles.menuBoard}>
      <div className={styles.menuColumns}>
        {/* دسته 1: قهوه گرم */}
        <div 
          className={`${styles.menuCard} ${styles.coffeeHot} ${activeCardIndex === 0 ? styles.active : ''}`}
          onClick={() => toggleCard(0)}
        >
          <div className={styles.cardContent}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaCoffee className={styles.menuIcon} />
                قهوه گرم
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>65</span>
                  <span className={styles.itemName}>اسپرسو تک</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>80</span>
                  <span className={styles.itemName}>اسپرسو دبل</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>قهوه ترک</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>فرانسه</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 2: قهوه سرد */}
        <div 
          className={`${styles.menuCard} ${styles.coffeeCold} ${activeCardIndex === 1 ? styles.active : ''}`}
          onClick={() => toggleCard(1)}
        >
          <div className={styles.cardContent}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaSnowflake className={styles.menuIcon} />
                قهوه سرد
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>135</span>
                  <span className={styles.itemName}>آیس آمریکانو</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>145</span>
                  <span className={styles.itemName}>آیس لاته</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>135</span>
                  <span className={styles.itemName}>آیس کافی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>145</span>
                  <span className={styles.itemName}>آیس موکا</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>110</span>
                  <span className={styles.itemName}>آفاگاتو</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>145</span>
                  <span className={styles.itemName}>ایس ماکیاتو</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 3: نوشیدنی های گرم */}
        <div 
          className={`${styles.menuCard} ${styles.hotDrinks} ${activeCardIndex === 2 ? styles.active : ''}`}
          onClick={() => toggleCard(2)}
        >
          <div className={styles.cardContent}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaFire className={styles.menuIcon} />
                نوشیدنی های گرم
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>145</span>
                  <span className={styles.itemName}>کارامل ماکیاتو</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>140</span>
                  <span className={styles.itemName}>هات چاکلت</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>140</span>
                  <span className={styles.itemName}>وایت چاکلت</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>140</span>
                  <span className={styles.itemName}>پینک چاکلت</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>140</span>
                  <span className={styles.itemName}>چای ماسالا</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>145</span>
                  <span className={styles.itemName}>چایی پسته</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>125</span>
                  <span className={styles.itemName}>اورج کاپو</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>140</span>
                  <span className={styles.itemName}>کاپوچینو</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>110</span>
                  <span className={styles.itemName}>آمریکانو</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>145</span>
                  <span className={styles.itemName}>نسکافه</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>145</span>
                  <span className={styles.itemName}>کرک</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>145</span>
                  <span className={styles.itemName}>موکا</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>145</span>
                  <span className={styles.itemName}>لاته</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 4: شیک بستنی */}
        <div 
          className={`${styles.menuCard} ${styles.iceCreamShake} ${activeCardIndex === 3 ? styles.active : ''}`}
          onClick={() => toggleCard(3)}
        >
          <div className={styles.cardContent}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaIceCream className={styles.menuIcon} />
                شیک بستنی
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>250</span>
                  <span className={styles.itemName}>نوتلا</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>225</span>
                  <span className={styles.itemName}>شکلات</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>235</span>
                  <span className={styles.itemName}>شکلات موز</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>220</span>
                  <span className={styles.itemName}>شکلات دارک</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>215</span>
                  <span className={styles.itemName}>وانیل</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>215</span>
                  <span className={styles.itemName}>طالبی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>215</span>
                  <span className={styles.itemName}>موز</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>215</span>
                  <span className={styles.itemName}>توت فرنگی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>225</span>
                  <span className={styles.itemName}>توت فرنگی موز</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>210</span>
                  <span className={styles.itemName}>اسپرسو</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>225</span>
                  <span className={styles.itemName}>تمشک</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>225</span>
                  <span className={styles.itemName}>بادم زمینی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>225</span>
                  <span className={styles.itemName}>ذغالی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>215</span>
                  <span className={styles.itemName}>نسکافه</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>240</span>
                  <span className={styles.itemName}>معجون شیرازی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>120</span>
                  <span className={styles.itemName}>بستنی 3 اسکپی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>300</span>
                  <span className={styles.itemName}>معجون ویژه ریژوان</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>230</span>
                  <span className={styles.itemName}>وافل بستنی</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 5: اسموتی */}
        <div 
          className={`${styles.menuCard} ${styles.smoothie} ${activeCardIndex === 4 ? styles.active : ''}`}
          onClick={() => toggleCard(4)}
        >
          <div className={styles.cardContent}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaGlassMartiniAlt className={styles.menuIcon} />
                اسموتی
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>125</span>
                  <span className={styles.itemName}>موز انبه</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>120</span>
                  <span className={styles.itemName}>هندوانه</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>120</span>
                  <span className={styles.itemName}>طالبی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>115</span>
                  <span className={styles.itemName}>آناناس</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>115</span>
                  <span className={styles.itemName}>استوایی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>115</span>
                  <span className={styles.itemName}>هلو</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 6: دمنوش گیاهی */}
        <div 
          className={`${styles.menuCard} ${styles.herbalTea} ${activeCardIndex === 5 ? styles.active : ''}`}
          onClick={() => toggleCard(5)}
        >
          <div className={styles.cardContent}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaLeaf className={styles.menuIcon} />
                دمنوش گیاهی
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>110</span>
                  <span className={styles.itemName}>دمنوش ریژوان</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>105</span>
                  <span className={styles.itemName}>گل گاو زبان</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>105</span>
                  <span className={styles.itemName}>آویشن</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>به لیمو</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>بهار نارنج</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>استوایی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>105</span>
                  <span className={styles.itemName}>چای سبز</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>110</span>
                  <span className={styles.itemName}>چای ترش</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>110</span>
                  <span className={styles.itemName}>چای زعفرانی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>90</span>
                  <span className={styles.itemName}>چای دارچین</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>80</span>
                  <span className={styles.itemName}>چای با گل محمدی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>120</span>
                  <span className={styles.itemName}>سفارشی</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 7: آب میوه */}
        <div 
          className={`${styles.menuCard} ${styles.juice} ${activeCardIndex === 6 ? styles.active : ''}`}
          onClick={() => toggleCard(6)}
        >
          <div className={styles.cardContent}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaAppleAlt className={styles.menuIcon} />
                آب میوه
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>120</span>
                  <span className={styles.itemName}>آب طالبی بستنی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>آب طالبی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>120</span>
                  <span className={styles.itemName}>آب هندوانه بستنی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>آب هندانه</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>آب اناناس</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>150</span>
                  <span className={styles.itemName}>شیر موز بستنی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>130</span>
                  <span className={styles.itemName}>شیر موز</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>آب پرتغال</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>آب انبه</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>آب انار</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>آب البالو</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>آب شاه توت</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>آب زرشک</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>100</span>
                  <span className={styles.itemName}>آب تمرهندی</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 8: پیتزا */}
        <div 
          className={`${styles.menuCard} ${styles.pizza} ${activeCardIndex === 7 ? styles.active : ''}`}
          onClick={() => toggleCard(7)}
        >
          <div className={styles.cardContent}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaPizzaSlice className={styles.menuIcon} />
                پیتزا
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>250-480</span>
                  <span className={styles.itemName}>پیتزا ریژوان</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>240-420</span>
                  <span className={styles.itemName}>پیتزا چیکن</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>260-430</span>
                  <span className={styles.itemName}>پیتزا پپرونی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>220-390</span>
                  <span className={styles.itemName}>پیتزا مخلوط</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 9: پاستا */}
        <div 
          className={`${styles.menuCard} ${styles.pasta} ${activeCardIndex === 8 ? styles.active : ''}`}
          onClick={() => toggleCard(8)}
        >
          <div className={styles.cardContent}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaUtensils className={styles.menuIcon} />
                پاستا
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>300</span>
                  <span className={styles.itemName}>پاستا</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>320</span>
                  <span className={styles.itemName}>پنه ریگاته با سبزیجات</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>320</span>
                  <span className={styles.itemName}>پنه ریگاته با سس الفردو</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>320</span>
                  <span className={styles.itemName}>پنه ریگاته با سس پستو</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>320</span>
                  <span className={styles.itemName}>پنه ریگاته با سس مارینارا</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>320</span>
                  <span className={styles.itemName}>هورنلی گراب با مرغ و قارچ</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>320</span>
                  <span className={styles.itemName}>مک اند چیز</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 10: فست فود */}
        <div 
          className={`${styles.menuCard} ${styles.fastFood} ${activeCardIndex === 9 ? styles.active : ''}`}
          onClick={() => toggleCard(9)}
        >
          <div className={styles.cardContent}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaHamburger className={styles.menuIcon} />
                فست فود
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>160</span>
                  <span className={styles.itemName}>سیب زمینی سرخ کرده</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>210</span>
                  <span className={styles.itemName}>سیب زمینی قارچ و پنیر</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>235</span>
                  <span className={styles.itemName}>سیب زمینی ویژه</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>195</span>
                  <span className={styles.itemName}>چیپس ویژه</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>150</span>
                  <span className={styles.itemName}>اسنک</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 11: کیک و شیرینی */}
        <div 
          className={`${styles.menuCard} ${styles.cake} ${activeCardIndex === 10 ? styles.active : ''}`}
          onClick={() => toggleCard(10)}
        >
          <div className={styles.cardContent}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaBirthdayCake className={styles.menuIcon} />
                کیک و شیرینی
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>160</span>
                  <span className={styles.itemName}>کیک روز</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 12: صبحانه */}
        <div 
          className={`${styles.menuCard} ${styles.breakfast} ${activeCardIndex === 11 ? styles.active : ''}`}
          onClick={() => toggleCard(11)}
        >
          <div className={styles.cardContent}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaBacon className={styles.menuIcon} />
                صبحانه
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>150-160</span>
                  <span className={styles.itemName}>خرما تخم مرغ</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>145-165</span>
                  <span className={styles.itemName}>سوسیس تخم مرغ</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>155-175</span>
                  <span className={styles.itemName}>سوسیس املت</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>105-115</span>
                  <span className={styles.itemName}>نیمرو</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>130-150</span>
                  <span className={styles.itemName}>املت</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>135</span>
                  <span className={styles.itemName}>خوراک لوبیا</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>170-180</span>
                  <span className={styles.itemName}>نیمرو تن ماهی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>190-200</span>
                  <span className={styles.itemName}>املت تن ماهی</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 13: ماکیتل */}
        <div 
          className={`${styles.menuCard} ${styles.mocktail} ${activeCardIndex === 12 ? styles.active : ''}`}
          onClick={() => toggleCard(12)}
        >
          <div className={styles.cardContent}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaCocktail className={styles.menuIcon} />
                ماکیتل
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>125</span>
                  <span className={styles.itemName}>ریژوان</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>125</span>
                  <span className={styles.itemName}>کوکا کاسائو</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>125</span>
                  <span className={styles.itemName}>بلوهاوایی</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>115</span>
                  <span className={styles.itemName}>لیموناد</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>115</span>
                  <span className={styles.itemName}>موهیتو</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>120</span>
                  <span className={styles.itemName}>مراکش</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemPrice}>120</span>
                  <span className={styles.itemName}>امازون</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* کارت مدت زمان سرو */}
        <div className={`${styles.menuCard} ${styles.specialCard}`}>
          <h2>مدت زمان سرو سفارش 45 دقیقه می باشد</h2>
          <li className={styles.menuItem}>
            <span className={styles.itemPrice}>40</span>
            <span className={styles.itemName}>میل ندارم</span>
          </li>
        </div>

        {/* کارت اینستاگرام */}
        <div className={`${styles.menuCard} ${styles.specialCard}`}>
          <h2>
            cafe.rizhvan <i className={`bi bi-instagram ${styles.instagramIcon}`}></i>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MenuSection;