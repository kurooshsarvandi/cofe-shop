import React from "react";
import styles from "./MenuSection.module.css"; 

function MenuSection() {
  return (
    <div className={styles.menuBoard}>
      <img 
        src="/photo/menu.jpg"
        alt="Cafe Rizhvan Header"
        className={styles.mainHeaderImage}
      />

      <div className={styles.menuColumns}>
        
        {/* دسته 1: قهوه گرم */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}>
            <div className={styles.imageContainer}>
              <img 
                src="/photo/cofee hot.jpg" 
                alt="Hot Coffee"
                className={styles.categoryImage}
              />
            </div>
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>قهوه گرم</h2>
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
            <div className={styles.imageContainer}>
              <img 
                src="/photo/drink cold.jpg" 
                alt="Cold Coffee"
                className={styles.categoryImage}
              />
            </div>
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>قهوه سرد</h2>
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
            <div className={styles.imageContainer}>
              <img 
                src="/photo/drink hot.jpg" 
                alt="Hot Drinks"
                className={styles.categoryImage}
              />
            </div>
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>نوشیدنی های گرم</h2>
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
            <div className={styles.imageContainer}>
              <img 
                src="/photo/shake.jpg" 
                alt="Ice Cream Shake"
                className={styles.categoryImage}
              />
            </div>
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>شیک بستنی</h2>
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
            <div className={styles.imageContainer}>
              <img 
                src="/photo/smooti.jpg" 
                alt="Smoothie"
                className={styles.categoryImage}
              />
            </div>
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>اسموتی</h2>
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
            <div className={styles.imageContainer}>
              <img 
                src="/photo/damnoosh.jpg" 
                alt="Herbal Tea"
                className={styles.categoryImage}
              />
            </div>
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>دمنوش گیاهی</h2>
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
                  <span className={styles.itemPrice}>95</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>چای با گل محمدی</span>
                  <span className={styles.itemPrice}>90</span>
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
            <div className={styles.imageContainer}>
              <img 
                src="/photo/ab mive.jpg" 
                alt="Juice"
                className={styles.categoryImage}
              />
            </div>
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>آب میوه</h2>
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
                  <span className={styles.itemPrice}>130</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>شیر موز بستنی</span>
                  <span className={styles.itemPrice}>110</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>شیر موز</span>
                  <span className={styles.itemPrice}>100</span>
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
            <div className={styles.imageContainer}>
              <img 
                src="/photo/pizza.jpg"
                alt="Pizza"
                className={styles.categoryImage}
              />
            </div>
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>پیتزا</h2>
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
            <div className={styles.imageContainer}>
              <img 
                src="/photo/pasta.jpg" 
                alt="Pasta"
                className={styles.categoryImage}
              />
            </div>
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>پاستا</h2>
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
            <div className={styles.imageContainer}>
              <img 
                src="/photo/fastfood.jpg" 
                alt="Fast Food"
                className={styles.categoryImage}
              />
            </div>
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>فست فود</h2>
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
            <div className={styles.imageContainer}>
              <img 
                src="/photo/kayk.jpg" 
                alt="Cake"
                className={styles.categoryImage}
              />
            </div>
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>کیک و شیرینی</h2>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>کیک روز</span>
                  <span className={styles.itemPrice}>120</span>
                </li>
                <li className={styles.menuItem}>
                  <span className={styles.itemName}>میل ندارم</span>
                  <span className={styles.itemPrice}>60</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* دسته 12: صبحانه */}
        <div className={styles.menuCard}>
          <div className={styles.cardContent}>
            <div className={styles.imageContainer}>
              <img 
                src="/photo/breakfast.jpg" 
                alt="Breakfast"
                className={styles.categoryImage}
              />
            </div>
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>صبحانه</h2>
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
            <div className={styles.imageContainer}>
              <img 
                src="/photo/makiatel.jpg" 
                alt="Mocktail"
                className={styles.categoryImage}
              />
            </div>
            
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>ماکیتل</h2>
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