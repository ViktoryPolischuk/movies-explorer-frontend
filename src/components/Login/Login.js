import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import Field from "../Field/Field";
import Button from "../Button/Button";
import "./Login.css";

function Login() {
  return (
    <main className="login">
      <header className="login__header">
        <Logo />
        <Title>Рады видеть!</Title>
      </header>
      <form className="login__form">
        <Field type="email" label="E-mail" required />
        <Field type="password" label="Пароль" required />
        <footer className="login__footer">
          <Button type="submit">Войти</Button>
          <p className="login__footer-text">
          Ещё не зарегистрированы?
          {" "}
          <Link className="login__footer-link" to="/signup">Регистрация</Link>
          </p>
        </footer>
      </form>
    </main>
  );
}

export default Login;
