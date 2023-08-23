import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import Field from "../Field/Field";
import Button from "../Button/Button";
import "./Register.css";

function Register() {
  return (
    <main className="register">
      <section className="register__content">
        <Logo className="register__logo" />
        <Title className="register__title">Добро пожаловать!</Title>
        <form className="register__form">
          <Field type="text" label="Имя" minLength="2" maxLength="30" required />
          <Field type="email" label="E-mail" minLength="6" maxLength="30" required />
          <Field type="password" label="Пароль" minLength="6" maxLength="30" required error="Что-то пошло не так..." />
          <Button type="submit" className="register__button">Зарегистрироваться</Button>
        </form>
        <p className="register__text">
          Уже зарегистрированы?
          {" "}
          <Link className="register__text-link" to="/signin">Войти</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;
