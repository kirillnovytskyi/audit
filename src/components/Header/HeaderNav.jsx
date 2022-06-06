import { useState } from "react";

export const HeaderNav = () => {

  const [navLinks] = useState([
    {title: 'О КОМПАНИИ', htmlID: 'aboutus'},
    {title: 'НАШИ УСЛУГИ', htmlID: 'services'},
    {title: 'НАШИ ПРИИМУЩЕСТВА', htmlID: 'benefits'},
    {title: 'ЭКСПРЕСС АУДИТ', htmlID: 'express-audit'},
    {title: 'БЛОГ', htmlID: 'blog'},
    {title: 'КОНТАКТЫ', htmlID: 'contacts'}
  ]);

  return (
    <nav className="page-header__nav">
      {navLinks.map(el => {
        return (
          <div className="page-header__nav-link" id={el.htmlID} key={el.htmlID}>{el.title}</div>
        );
      })}
    </nav>
  );
};