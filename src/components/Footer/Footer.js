import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__bottom">
          <p className="footer__text">&copy; 2023</p>
            <ul className="footer__links">
              <li className="footer__link">
                <a
                  className="footer__link"
                  href="https://github.com/ViktoryPolischuk/"
                  target="_blank"
                  rel="noreferrer">
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__link">
                <a
                  className="footer__link"
                  href="https://github.com/ViktoryPolischuk/"
                  target="_blank"
                  rel="noreferrer">
                  Github
                  </a>
              </li>
            </ul>
        </div>
    </section>
  );
}

export default Footer;
