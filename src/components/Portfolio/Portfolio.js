import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/ViktoryPolischuk/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer">
            Mesto: социальная сеть
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://viktorypolischuk.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer">
             Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://viktorypolischuk.github.io/mesto/"
            target="_blank"
            rel="noreferrer">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
