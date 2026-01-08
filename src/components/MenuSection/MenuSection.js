import React from "react";
import styles from "./MenuSection.module.css"; 
import { QRCodeSVG } from "qrcode.react";
import { FaNfcSymbol } from "react-icons/fa6";
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
  FaQrcode,
  FaWaveSquare,     // آیکون NF      
  
} from "react-icons/fa";
function MenuSection() {
  return (
    <div className={styles.menuBoard}>
     

      <div className={styles.menuColumns}>
        
        {/* دسته 1: قهوه گرم */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}> 
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaCoffee className={styles.menuIcon} />
                 قهوه گرم
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>اسپرسو تک</span>
                  <span className={styles.itemPrice}>65</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>اسپرسو دبل</span>
                  <span className={styles.itemPrice}>80</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>قهوه ترک</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>فرانسه</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 2: قهوه سرد */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}>
         
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
            <FaSnowflake className={styles.menuIcon} />
           قهوه  سرد
          </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آیس آمریکانو</span>
                  <span className={styles.itemPrice}>135</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آیس لاته</span>
                  <span className={styles.itemPrice}>105</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آیس کافی</span>
                  <span className={styles.itemPrice}>125</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آیس موکا</span>
                  <span className={styles.itemPrice}>135</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آفاگاتو</span>
                  <span className={styles.itemPrice}>105</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>ایس ماکیاتو</span>
                  <span className={styles.itemPrice}>135</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 3: نوشیدنی های گرم */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}>
            
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
                <FaFire className={styles.menuIcon} />
                  نوشیدنی های گرم
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>کارامل ماکیاتو</span>
                  <span className={styles.itemPrice}>145</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>هات چاکلت</span>
                  <span className={styles.itemPrice}>140</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>وایت چاکلت</span>
                  <span className={styles.itemPrice}>140</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>پینک چاکلت</span>
                  <span className={styles.itemPrice}>140</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>چای ماسالا</span>
                  <span className={styles.itemPrice}>140</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>چایی پسته</span>
                  <span className={styles.itemPrice}>145</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>اورج کاپو</span>
                  <span className={styles.itemPrice}>110</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>کاپوچینو</span>
                  <span className={styles.itemPrice}>140</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آمریکانو</span>
                  <span className={styles.itemPrice}>110</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>نسکافه</span>
                  <span className={styles.itemPrice}>140</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>کرک</span>
                  <span className={styles.itemPrice}>145</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>موکا</span>
                  <span className={styles.itemPrice}>145</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>لاته</span>
                  <span className={styles.itemPrice}>145</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 4: شیک بستنی */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}>
           
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
               <FaIceCream className={styles.menuIcon} />
                شیک بستنی
              </h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>نوتلا</span>
                  <span className={styles.itemPrice}>235</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>شکلات</span>
                  <span className={styles.itemPrice}>225</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>شکلات موز</span>
                  <span className={styles.itemPrice}>235</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>شکلات دارک</span>
                  <span className={styles.itemPrice}>215</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>وانیل</span>
                  <span className={styles.itemPrice}>210</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>طالبی</span>
                  <span className={styles.itemPrice}>225</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>موز</span>
                  <span className={styles.itemPrice}>210</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>توت فرنگی</span>
                  <span className={styles.itemPrice}>215</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>توت فرنگی موز</span>
                  <span className={styles.itemPrice}>225</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>اسپرسو</span>
                  <span className={styles.itemPrice}>210</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>تمشک</span>
                  <span className={styles.itemPrice}>225</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>بادم زمینی</span>
                  <span className={styles.itemPrice}>225</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>ذغالی</span>
                  <span className={styles.itemPrice}>225</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>نسکافه</span>
                  <span className={styles.itemPrice}>215</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>معجون شیرازی</span>
                  <span className={styles.itemPrice}>240</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>بستنی 3 اسکپی</span>
                  <span className={styles.itemPrice}>120</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>معجون ویژه ریژوان</span>
                  <span className={styles.itemPrice}>300</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>وافل بستنی</span>
                  <span className={styles.itemPrice}>230</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 5: اسموتی */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}>
         
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
  <FaGlassMartiniAlt className={styles.menuIcon} />
  اسموتی
</h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>موز انبه</span>
                  <span className={styles.itemPrice}>125</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>هندوانه</span>
                  <span className={styles.itemPrice}>120</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>طالبی</span>
                  <span className={styles.itemPrice}>120</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آناناس</span>
                  <span className={styles.itemPrice}>115</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>استوایی</span>
                  <span className={styles.itemPrice}>115</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>هلو</span>
                  <span className={styles.itemPrice}>115</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 6: دمنوش گیاهی */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}>
           
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
  <FaLeaf className={styles.menuIcon} />
  دمنوش گیاهی
</h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>دمنوش ریژوان</span>
                  <span className={styles.itemPrice}>110</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>گل گاو زبان</span>
                  <span className={styles.itemPrice}>105</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آویشن</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>به لیمو</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>بهار نارنج</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>استوایی</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>چای سبز</span>
                  <span className={styles.itemPrice}>105</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>چای ترش</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>چای زعفرانی</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>چای دارچین</span>
                  <span className={styles.itemPrice}>85</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>چای با گل محمدی</span>
                  <span className={styles.itemPrice}>80</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>سفارشی</span>
                  <span className={styles.itemPrice}>105</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 7: آب میوه */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}>
            
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
  <FaAppleAlt className={styles.menuIcon} />
  آب میوه
</h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آب طالبی بستنی</span>
                  <span className={styles.itemPrice}>120</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آب طالبی</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آب هندوانه بستنی</span>
                  <span className={styles.itemPrice}>120</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آب هندانه</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آب اناناس</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>شیر موز بستنی</span>
                  <span className={styles.itemPrice}>150</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>شیر موز</span>
                  <span className={styles.itemPrice}>130</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آب پرتغال</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آب انبه</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آب انار</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آب البالو</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آب شاه توت</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آب زرشک</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>آب تمرهندی</span>
                  <span className={styles.itemPrice}>100</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 8: پیتزا */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}>
            
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
  <FaPizzaSlice className={styles.menuIcon} />
  پیتزا
</h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>پیتزا ریژوان</span>
                  <span className={styles.itemPrice}>315</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>پیتزا چیکن</span>
                  <span className={styles.itemPrice}>295</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>پیتزا پپرونی</span>
                  <span className={styles.itemPrice}>275</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>پیتزا مخلوط</span>
                  <span className={styles.itemPrice}>255</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 9: پاستا */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}>
        
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
  <FaUtensils className={styles.menuIcon} />
  پاستا
</h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>پاستا</span>
                  <span className={styles.itemPrice}>300</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>پنه ریگاته با سبزیجات</span>
                  <span className={styles.itemPrice}>320</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>پنه ریگاته با سس الفردو</span>
                  <span className={styles.itemPrice}>320</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>پنه ریگاته با سس پستو</span>
                  <span className={styles.itemPrice}>320</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>پنه ریگاته با سس مارینارا</span>
                  <span className={styles.itemPrice}>320</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>هورنلی گراب با مرغ و قارچ</span>
                  <span className={styles.itemPrice}>320</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>مک اند چیز</span>
                  <span className={styles.itemPrice}>320</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 10: فست فود */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}>
           
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
  <FaHamburger className={styles.menuIcon} />
  فست فود
</h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>سیب زمینی سرخ کرده</span>
                  <span className={styles.itemPrice}>160</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>سیب زمینی قارچ و پنیر</span>
                  <span className={styles.itemPrice}>210</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>سیب زمینی ویژه</span>
                  <span className={styles.itemPrice}>235</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>چیپس ویژه</span>
                  <span className={styles.itemPrice}>195</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>اسنک</span>
                  <span className={styles.itemPrice}>150</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 11: کیک و شیرینی */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}>
            
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
  <FaBirthdayCake className={styles.menuIcon} />
  کیک و شیرینی
</h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>کیک روز</span>
                  <span className={styles.itemPrice}>120</span>
                </li>
              
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 12: صبحانه */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}>
          
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>
  <FaBacon className={styles.menuIcon} />
  صبحانه
</h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>خرما تخم مرغ</span>
                  <span className={styles.itemPrice}>150-160</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>سوسیس تخم مرغ</span>
                  <span className={styles.itemPrice}>145-155</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>سوسیس املت</span>
                  <span className={styles.itemPrice}>155-165</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>نیمرو</span>
                  <span className={styles.itemPrice}>105-115</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>املت</span>
                  <span className={styles.itemPrice}>130-140</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>خوراک لوبیا</span>
                  <span className={styles.itemPrice}>135</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>نیمرو تن ماهی</span>
                  <span className={styles.itemPrice}>170-180</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>املت تن ماهی</span>
                  <span className={styles.itemPrice}>190-200</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 13: ماکیتل */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}>
           
            
            <div className={styles.textContainer}>
            <h2 className={styles.sectionTitle}>
  <FaCocktail className={styles.menuIcon} />
  ماکیتل
</h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>ریژوان</span>
                  <span className={styles.itemPrice}>125</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>کوکا کاسائو</span>
                  <span className={styles.itemPrice}>125</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>بلوهاوایی</span>
                  <span className={styles.itemPrice}>125</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>لیموناد</span>
                  <span className={styles.itemPrice}>115</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>موهیتو</span>
                  <span className={styles.itemPrice}>115</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>مراکش</span>
                  <span className={styles.itemPrice}>120</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>امازون</span>
                  <span className={styles.itemPrice}>120</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        

{/* کارت QR Code */}
<div className={styles.menuCard}>
  <h2 className={styles.sectionTitle}>
    <FaQrcode className={styles.menuIcon} />
    اسکن برای منوی دیجیتال
  </h2>
  <div className={styles.qrContainer}>
    <QRCodeSVG
      value="https://caferizhvan.vercel.app/#menu" 
      size={180}
      level="H"
      includeMargin={true}
      fgColor="#8B4513"  
      bgColor="#f0e6d2"  
    />
    <p className={styles.qrText}>
      برای مشاهده منوی به‌روز و سفارش آنلاین اسکن کنید
    </p>
  </div>
</div>


{/*NFC*/}
<div className={styles.menuCard}>
  <div className={styles.nfcContainer}>
    <div className={styles.nfcIcon}>
      <FaNfcSymbol size={80} color="#8B4513" /> {/* آیکون NFC بزرگ‌تر */}
    </div>
  </div>
</div>

<div className={`${styles.menuCard} ${styles.specialCard}`}>
  <h2>مدت زمان سرو سفارش 45 دقیقه می باشد</h2>
    <li className={styles.menuItem}>
       <span className={styles.itemName}>میل ندارم</span>
       <span className={styles.itemPrice}>60</span>
    </li>
</div>

        {/* کارت مدت زمان سرو */}
        <div className={`${styles.menuCard} ${styles.specialCard}`}>
          <h2>مدت زمان سرو سفارش 45 دقیقه می باشد</h2>
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