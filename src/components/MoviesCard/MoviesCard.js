import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./MoviesCard.css";

function MoviesCard({ nameRU, duration, owner, thumbnail, withDeleteButton }) {
  const currentUser = useContext(CurrentUserContext);
  const isSaved = owner === currentUser._id;

  return (
    <section className="movies-card">
      <figure className="movies-card__image-container">
        <figcaption className="movies-card__caption">
          <h2 className="movies-card__title">{nameRU}</h2>
          <p className="movies-card__duration">{duration}</p>
          {!withDeleteButton && (
            <button
              type="button"
              className={`movies-card__save ${isSaved ? "movies-card__save_active" : ""}`}
            />
          )}
          {withDeleteButton && isSaved && (
            <button type="button" className="movies-card__delete" />
          )}
        </figcaption>
        <img src={ thumbnail } alt={nameRU} className="movies-card__image" />
      </figure>
    </section>
  );
}

export default MoviesCard;
