import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import Field from "../Field/Field";
import Button from "../Button/Button";
import "./Register.css";

function Register() {
  return (
    <main className="register">
      <header className="register__header">
        <Logo />
        <Title>Добро пожаловать!</Title>
      </header>
      <form className="register__form">
        <Field type="name" label="Имя" required />
        <Field type="email" label="E-mail" required />
        <Field type="password" label="Пароль" required error="Что-то пошло не так..." />
        <footer className="register__footer">
          <Button type="submit">Зарегистрироваться</Button>
          <p className="register__footer-text">
          Уже зарегистрированы?
          {" "}
          <Link className="register__footer-link" to="/signin">Войти</Link>
          </p>
        </footer>
      </form>
    </main>
  );
}

export default Register;
