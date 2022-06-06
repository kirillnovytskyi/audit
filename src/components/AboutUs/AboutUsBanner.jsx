import cube from '../../img/cube.png';

export const AboutUsBanner = () => {
  return (
    <div className="about-us__banner">
      <div className="about-us__cube-container">
        <img src={cube} alt="Cube" className="about-us__cube-image" />
      </div>
      <div className="about-us__title-container">
        <div className="about-us__title">С нами<br />все сложиться!</div>
        <div className="about-us__info-list-container">
          <ul className="about-us__info-list">
            <li className="about-us__info-list-element">бухгалтерское сопровождение</li>
            <li className="about-us__info-list-element">аудиторские услуги</li>
            <li className="about-us__info-list-element">налоговый консалтинг</li>
            <li className="about-us__info-list-element">управленческий учет</li>
          </ul>
        </div>
      </div>
    </div>
  );
};