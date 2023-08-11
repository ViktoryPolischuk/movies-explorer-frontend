import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/" title="На главную" />
      <nav className="header__auth">
        <ul className="header__auth-links">
          <li>
            <Link
              className="header__auth-link"
              to="/signup"
            >
              Регистрация
            </Link>
          </li>
          <li>
            <Link
              className="header__auth-link header__auth-link_color"
              to="/signin"
            >
              Войти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
