import phone from '../../img/phone.png';
import viber from '../../img/viber.png';
import telegram from '../../img/telegram.png';
import logo from '../../img/logo.png';

export const HeaderMain = () => {

  return (
    <div className="page-header__main">
      <div className="page-header__logo-container">
        <img src={logo} alt="Page Logo" className="page-header__logo-image"/>
      </div>
      <div className="page-header__contacts_mobile">
        <div className="page-header__menu-button">
          <span className="page-header__button-item"></span>
          <span className="page-header__button-item"></span>
          <span className="page-header__button-item"></span>
        </div>
      </div>
      <div className="page-header__contacts">
        <div className="page-header__phone-container contact-item_margin-right_30">
          <img src={phone} alt="Phone" className="page-header__phone-image"/>
          <span className="page-header__phone-text">+38 044 154 13 14</span>
        </div>
        <div className="page-header__viber-container contact-item_margin-right_10 social-link">
          <img src={viber} alt="Viber" className="page-header__viber-image"/>
        </div>
        <div className="page-header__telegram-container contact-item_margin-right_10 social-link">
          <img src={telegram} alt="Telegram" className="page-header__telegram-image"/>
        </div>
        <button className="page-header__application-button" type="button">ОСТАВИТЬ ЗАЯВКУ</button>
      </div>
    </div>
  );
};