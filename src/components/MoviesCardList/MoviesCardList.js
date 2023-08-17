import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, isLoading, withDeleteButton }) {
  return (
    <section className="movies-card-list">
      {isLoading
        ? <Preloader />
        : movies.length === 0
        ? <p className="movies-card-list__text">Ничего не найдено</p>
        : (
            <>
              <div className="movies-card-list__container">
                {movies.map(item => (
                  <MoviesCard key={item._id} {...item} withDeleteButton={withDeleteButton} />
                ))}
              </div>
              <button
                type="button"
                className="movies-card-list__button">
                  Ещё
              </button>
            </>
          )
      }
    </section>
  );
}

export default MoviesCardList;
