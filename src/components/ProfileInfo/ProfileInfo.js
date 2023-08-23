import { Link } from "react-router-dom";
import Title from "../Title/Title";
import "./ProfileInfo.css";

function ProfileInfo() {
  return (
    <>
    <main>
      <section className="profile-info">
        <Title className="profile-info__title">Привет, Виктория!</Title>
        <form className="profile-info__form">
          <label className="profile-info__field">
            <span className="profile-info__text">Имя</span>
            <input className="profile-info__input"  defaultValue="Виктория"
              placeholder="" minLength="2" maxLength="30" required />
          </label>
          <label className="profile-info__field">
            <span className="profile-info__text">E-mail</span>
            <input className="profile-info__input" defaultValue="pochta@yandex.ru"
              placeholder="" minLength="6" maxLength="30" required />
          </label>
        </form>
        <div className="profile-info__links">
          <button className="profile-info__button" type="button">Редактировать</button>
          <Link className="profile-info__link" to="/">Выйти из аккаунта</Link>
        </div>
      </section>
    </main>

    </>
  );
}

export default ProfileInfo;
