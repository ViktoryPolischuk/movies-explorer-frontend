import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header({isLanding}) {
  const [isOpened, setIsOpened] = useState(false);

  const onBurgerClick = () => {
    setIsOpened(!isOpened)
  }

  useEffect(() => {
    document.body.style.overflow = !isOpened ? "auto" : "hidden";
  }, [isOpened])

  return (
    <header className={`header ${isLanding ? "header_landing" : ""}`}>
      <Logo />
      {isLanding && (
        <nav className="header__nav">
          <ul className="header__nav-links header__nav-links_type_auth">
            <li>
              <Link
                className="header__nav-link"
                to="/signup"
              >
                Регистрация
              </Link>
            </li>
            <li>
              <Link
                className="header__nav-link header__nav-link_type_button"
                to="/signin"
              >
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {!isLanding && (
        <>
          <nav className={`header__nav header__nav_overlay ${isOpened ? "header__nav_opened" : ""}`}>
            <ul className="header__nav-links header__nav-links_type_site">
              <li className="header__mobile-link">
                <Link
                  className="header__nav-link"
                  to="/"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  className="header__nav-link header__nav-link_active"
                  to="/movies"
                >
                  Фильмы
                </Link>
              </li>
              <li>
                <Link
                  className="header__nav-link"
                  to="/saved-movies"
                >
                  Сохраненные фильмы
                </Link>
              </li>
            </ul>
            <ul className="header__nav-links header__nav-links_type_account">
              <li>
                  <Link
                    className="header__nav-link header__nav-link_type_account"
                    to="/profile"
                  >
                    Аккаунт
                  </Link>
                </li>
            </ul>
          </nav>
          <button type="button" className={`header__burger ${isOpened ? "header__burger_opened" : ""}`} onClick={onBurgerClick} />
        </>
      )}
    </header>
  );
}

export default Header;
