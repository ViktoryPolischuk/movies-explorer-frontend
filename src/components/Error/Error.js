import "./Error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main>
      <section className="error">
        <h1 className="error__title">404</h1>
        <p className="error__message">Страница не найдена</p>
        <Link className="error__link" to="/">Назад</Link>
      </section>
    </main>
  );
}

export default Error;
