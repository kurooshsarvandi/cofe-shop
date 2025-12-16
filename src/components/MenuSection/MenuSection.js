import React from "react";
import "./MenuSection.css";

function MenuSection() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu Coffee</h1>

      <div className="menu-block">
        <div className="menu-image">
          <img src="/photo/Cappuccino.jpg" alt="Hot Coffee" />
        </div>

        <div className="menu-list">
          <h2>HOT</h2>
          <div className="item">
            <span>Espresso</span><span>45,000</span>
          </div>
          <div className="item">
            <span>Double Espresso</span><span>55,000</span>
          </div>
          <div className="item">
            <span>Americano</span><span>48,000</span>
          </div>
          <div className="item">
            <span>Cappuccino</span><span>52,000</span>
          </div>
          <div className="item">
            <span>Latte</span><span>55,000</span>
          </div>
          <div className="item">
            <span>Macchiato</span><span>50,000</span>
          </div>
          <div className="item">
            <span>Hot Chocolate</span><span>45,000</span>
          </div>
        </div>
      </div>

      <div className="menu-block reverse">
        <div className="menu-image">
          <img src="/photo/ICE COFFE.jpg" alt="Cold Coffee" />
        </div>

        <div className="menu-list">
          <h2>COLD</h2>
          <div className="item">
            <span>Iced Americano</span><span>52,000</span>
          </div>
          <div className="item">
            <span>Iced Latte</span><span>58,000</span>
          </div>
          <div className="item">
            <span>Caramel Iced Coffee</span><span>65,000</span>
          </div>
          <div className="item">
            <span>Iced Mocha</span><span>70,000</span>
          </div>
        </div>
      </div>

      <div className="menu-block">
        <div className="menu-image">
          <img src="/photo/CAKE.jpg" alt="Iced Coffee" />
        </div>

        <div className="menu-list">
          <h2>CAKE</h2>
          <div className="item">
            <span>Cheesecake</span><span>60,000</span>
          </div>
          <div className="item">
            <span>Cookie</span><span>25,000</span>
          </div>
          <div className="item">
            <span>Cinnamon Roll</span><span>40,000</span>
          </div>
          <div className="item">
            <span>Chocolate Croissant</span><span>75,000</span>
          </div>
          <div className="item">
            <span>Corosan</span><span>55,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default  MenuSection