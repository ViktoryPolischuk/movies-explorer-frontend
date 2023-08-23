import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import Field from "../Field/Field";
import Button from "../Button/Button";
import "./Login.css";

function Login() {
  return (
    <main className="login">
      <section className="login__content">
        <Logo className="login__logo" />
        <Title className="login__title">Рады видеть!</Title>
        <form className="login__form">
          <Field type="email" label="E-mail" minLength="6" maxLength="30" required />
          <Field type="password" label="Пароль" minLength="6" maxLength="30" required />
          <Button type="submit" className="login__button">Войти</Button>
        </form>
        <p className="login__text">
          Ещё не зарегистрированы?
          {" "}
          <Link className="login__text-link" to="/signup">Регистрация</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
