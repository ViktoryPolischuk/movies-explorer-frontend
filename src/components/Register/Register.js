import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import Field from '../Field/Field';
import Button from '../Button/Button';
import useFormValidation from '../../utils/useFormValidation';
import { NAME_PATTERN, EMAIL_PATTERN } from '../../utils/constants';
import './Register.css';

function Register({ isSubmitting, submittingError, onSubmit }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <main className="register">
      <section className="register__content">
        <Logo className="register__logo" />
        <Title className="register__title">Добро пожаловать!</Title>
        <form className="register__form" onSubmit={handleSubmit}>
          <Field
            label="Имя"
            type="text"
            name="name"
            minLength="2"
            maxLength="30"
            pattern={NAME_PATTERN}
            required
            value={values.name || ''}
            error={errors.name}
            onChange={handleChange}
          />
          <Field
            label="E-mail"
            type="email"
            name="email"
            minLength="6"
            maxLength="30"
            pattern={EMAIL_PATTERN}
            required
            value={values.email || ''}
            error={errors.email}
            onChange={handleChange}
          />
          <Field
            label="Пароль"
            type="password"
            name="password"
            minLength="6"
            maxLength="30"
            required
            value={values.password || ''}
            error={errors.password}
            onChange={handleChange}
          />
          {submittingError && (
            <p className="register__error">{submittingError}</p>
          )}
          <Button
            type="submit"
            className="register__button"
            disabled={isSubmitting || !isValid}>
            {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
          </Button>
        </form>
        <p className="register__text">
          Уже зарегистрированы?
          {' '}
          <Link className="register__text-link" to="/signin">Войти</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;
