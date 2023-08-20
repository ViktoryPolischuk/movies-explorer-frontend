import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, isLoading, withDeleteButton }) {
  const hasMoreMovies = movies.length > 6
  return (
    <section className={`movies-card-list ${hasMoreMovies ? 'movies-card-list_infinite' : ''}`}>
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
              {hasMoreMovies &&
                <button
                  type="button"
                  className="movies-card-list__button">
                    Ещё
                </button>
              }
            </>
          )
      }
    </section>
  );
}

export default MoviesCardList;
