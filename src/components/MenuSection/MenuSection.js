import React from "react";
import "./MenuSection.css";

function MenuSection() {
  return (
    <div className="menu-board">
      <h1 className="menu-board-title">RIZHVAN MENU</h1>

      <div className="menu-columns">

        <div className="menu-card">
          <h2>قهوه گرم</h2>
          <ul>
            <li><span>اسپرسو تک</span><span>65</span></li>
            <li><span> اسپرسو دبل</span><span>80</span></li>
            <li><span>قهوه ترک</span><span>100</span></li>
            <li><span>فرانسه</span><span>100</span></li>
          </ul>
        </div>

        <div className="menu-card">
          <h2>قهوه سرد</h2>
          <ul>
            <li><span>آیس آمریکانو</span><span>135</span></li>
            <li><span>آیس لاته</span><span>105</span></li>
            <li><span>آیس کافی</span><span>125</span></li>
            <li><span>آیس موکا</span><span>135</span></li>
            <li><span>آفاگاتو</span><span>105</span></li>
            <li><span>ایس ماکیاتو</span><span>135</span></li>
          </ul>
        </div>

        <div className="menu-card">
          <h2>اسموتی</h2>
          <ul>
            <li><span>موز انبه </span><span>125</span></li>
            <li><span>هندوانه</span><span>120</span></li>
            <li><span>طالبی</span><span>120</span></li>
            <li><span>آناناس</span><span>115</span></li>
            <li><span>استوایی</span><span>115</span></li>
            <li><span>هلو</span><span>115</span></li>
          </ul>
        </div>

        <div className="menu-card">
          <h2>نوشیدنی های گرم</h2>
          <ul>
            <li><span>کارامل ماکیاتو</span><span>145</span></li>
            <li><span>هات چاکلت</span><span>140</span></li>
            <li><span>وایت چاکلت</span><span>140</span></li>
            <li><span>پینک چاکلت</span><span>140</span></li>
            <li><span>چای ماسالا</span><span>140</span></li>
            <li><span>چایی پسته</span><span>145</span></li>
            <li><span>اورج کاپو</span><span>110</span></li>
            <li><span>کاپوچینو</span><span>140</span></li>
            <li><span>آمریکانو</span><span>110</span></li>
            <li><span>نسکافه</span><span>140</span></li>
            <li><span>کرک</span><span>145</span></li>
            <li><span>موکا</span><span>145</span></li>
            <li><span>لاته</span><span>145</span></li>
          </ul>
        </div>

        <div className="menu-card">
          <h2>دمنوش گیاهی</h2>
          <ul>
            <li><span>دمنوش ریژوان</span><span>110</span></li>
            <li><span>گل گاو زبان</span><span>105</span></li>
            <li><span>آویشن</span><span>100</span></li>
            <li><span>به لیمو</span><span>100</span></li>
            <li><span>بهار نارنج</span><span>100</span></li>
            <li><span>استوایی</span><span>100</span></li>
            <li><span>چای سبز</span><span>105</span></li>
            <li><span>چای ترش</span><span>100</span></li>
            <li><span>چای زعفرانی</span><span>100</span></li>
            <li><span>چای دارچین</span><span>95</span></li>
            <li><span>چای با گل محمدی</span><span>90</span></li>
            <li><span>سفارشی</span><span>105</span></li>
          </ul>
        </div>

        <div className="menu-card">
          <h2>کیک و شیرینی</h2>
          <ul>
            <li><span> کیک روز</span><span>120</span></li>
            <li><span> میل ندارم</span><span>60</span></li>
          </ul>
        </div>

        <div className="menu-card">
          <h2>شیک بستنی </h2>
          <ul>
            <li><span>نوتلا</span><span>235</span></li>
            <li><span>شکلات</span><span>225</span></li>
            <li><span>شکلات موز</span><span>235</span></li>
            <li><span>شکلات دارک</span><span>215</span></li>
            <li><span>وانیل</span><span>210</span></li>
            <li><span>طالبی</span><span>225</span></li>
            <li><span>موز</span><span>210</span></li>
            <li><span>توت فرنگی</span><span>215</span></li>
            <li><span>توت فرنگی موز</span><span>225</span></li>
            <li><span>اسپرسو</span><span>210</span></li>
            <li><span>تمشک</span><span>225</span></li>
            <li><span>بادم زمینی</span><span>225</span></li>
            <li><span>ذغالی</span><span>225</span></li>
            <li><span>نسکافه</span><span>215</span></li>
            <li><span>معجون شیرازی</span><span>240</span></li>
            <li><span>بستنی 3 اسکپی</span><span>120</span></li>
            <li><span>معجون ویژه ریژوان</span><span>300</span></li>
            <li><span>وافل بستنی</span><span>230</span></li>
          </ul>
        </div>

        <div className="menu-card">
          <h2>آب میوه</h2>
          <ul>
            <li><span>آب طالبی بستنی</span><span>120</span></li>
            <li><span>آب طالبی</span><span>100</span></li>
            <li><span>آب هندوانه بستنی</span><span>120</span></li>
            <li><span>آب هندانه</span><span>100</span></li>
            <li><span>آب اناناس</span><span>130</span></li>
            <li><span>شیر موز بستنی</span><span>110</span></li>
            <li><span>شیر موز</span><span>100</span></li>
            <li><span>آب پرتغال</span><span>100</span></li>
            <li><span>آب انبه</span><span>100</span></li>
            <li><span>آب انار</span><span>100</span></li>
            <li><span>آب البالو</span><span>100</span></li>
            <li><span>آب شاه توت</span><span>100</span></li>
            <li><span>آب زرشک</span><span>100</span></li>
            <li><span>آب تمرهندی</span><span>100</span></li>
          </ul>
        </div>
        

        <div className="menu-card">
          <h2>پیتزا </h2>
          <ul>
            <li><span>پیتزا ریژوان</span><span>315</span></li>
            <li><span>پیتزا چیکن</span><span>295</span></li>
            <li><span>پیتزا پپرونی</span><span>275</span></li>
            <li><span>پیتزا مخلوط</span><span>255</span></li>
          </ul>
        </div>

        <div className="menu-card">
          <h2>پاستا</h2>
          <ul>
            <li><span>پاستا</span><span>300</span></li>
            <li><span>پنه ریگاته با سبزیجات</span><span>320</span></li>
            <li><span>پنه ریگاته با سس الفردو</span><span>320</span></li>
            <li><span>پنه ریگاته با سس پستو</span><span>320</span></li>
            <li><span>پنه ریگاته با سس مارینارا</span><span>320</span></li>
            <li><span>هورنلی گراب با مرغ و قارچ</span><span>320</span></li>
            <li><span>مک اند چیز</span><span>320</span></li>
          </ul>
        </div>


        <div className="menu-card">
          <h2>فست فود</h2>
          <ul>
            <li><span>سیب زمینی سرخ کرده</span><span>160</span></li>
            <li><span>سیب زمینی قارچ و پنیر</span><span>210</span></li>
            <li><span>سیب زمینی ویژه</span><span>235</span></li>
            <li><span>چیپس ویژه</span><span>195</span></li>
            <li><span>اسنک</span><span>150</span></li>
          </ul>
        </div>


        <div className="menu-card">
          <h2>صبحانه </h2>
          <ul>
            <li><span>خرما تخم مرغ</span><span>150-160</span></li>
            <li><span>سوسیس تخم مرغ</span><span>145-155</span></li>
            <li><span>سوسیس املت</span><span>155-165</span></li>
            <li><span>نیمرو</span><span>105-115</span></li>
            <li><span>املت</span><span>130-140</span></li>
            <li><span>خوراک لوبیا</span><span>135</span></li>
            <li><span>نیمرو تن ماهی</span><span>170-180</span></li>
            <li><span>املت تن ماهی</span><span>190-200</span></li>
          </ul>
        </div>


        <div className="menu-card">
          <h2>ماکیتل</h2>
          <ul>
            <li><span>ریژوان</span><span>125</span></li>
            <li><span>کوکا کاسائو</span><span>125</span></li>
            <li><span>بلوهاوایی</span><span>125</span></li>
            <li><span>لیموناد</span><span>115</span></li>
            <li><span>موهیتو</span><span>115</span></li>
            <li><span>مراکش</span><span>120</span></li>
            <li><span>امازون</span><span>120</span></li>
          </ul>
        </div>

        <div className="menu-card">
          <h2>مدت زمان سرو سفارش 45 دقیقه می باشد</h2>
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
