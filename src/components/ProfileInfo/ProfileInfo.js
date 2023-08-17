import { Link } from "react-router-dom";
import Title from "../Title/Title";
import "./ProfileInfo.css";

function ProfileInfo() {
  return (
    <main className="profile-info">
      <Title className="profile-info__title">Привет, Виктория!</Title>
      <form className="profile-info__form">
        <label className="profile-info__field">
          <span className="profile-info__text">Имя</span>
          <input className="profile-info__input"  value="Виктория" required />
        </label>
        <label className="profile-info__field">
          <span className="profile-info__text">E-mail</span>
          <input className="profile-info__input" value="pochta@yandex.ru" required />
        </label>
      </form>
      <footer className="profile-info__footer">
        <button className="profile-info__button" type="button">Редактировать</button>
        <Link className="profile-info__link" to="/">Выйти из аккаунта</Link>
      </footer>
    </main>
  );
}

export default ProfileInfo;
