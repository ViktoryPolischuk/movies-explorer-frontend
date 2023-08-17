import "./AboutMe.css";
import studentImage from "../../images/student-image.jpg";

function AboutMe() {
  return (
    <section className="student" id="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__about">
        <div className="student__info">
          <h3 className="student__name">Виктория</h3>
          <h4 className="student__job">Фронтенд-разработчик, 30 лет</h4>
          <p className="student__biography">
            Я родилась и живу в Москве, закончила факультет экономики МГУУ Правительства Москвы.
            Я замужем и у меня трое детей. Со школы увлекалась программированием, но долгое время
            не могла решиться заняться им всерьез. И вот дорога жизни привела меня в ЯндексПрактикум,
            чему я очень рада.
          </p>
          <a
          className="student__link"
          href="https://github.com/ViktoryPolischuk/"
          target="_blank"
          rel="noreferrer">
          Github
          </a>
        </div>
        <div className="student__image-container">
          <img
            className="student__image"
            src={ studentImage }
            alt="Фотография студента"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
