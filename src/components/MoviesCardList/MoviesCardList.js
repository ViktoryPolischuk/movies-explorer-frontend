import { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({
  movies,
  isLoading,
  onAddMovie,
  onDeleteMovie,
}) {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  // eslint-disable-next-line no-nested-ternary
  const [initialPage, step, count] = pageWidth < 768
    ? [5, 2, 1]
    : pageWidth < 1024 ? [4, 1, 2] : [4, 1, 3];
  const [currentPage, setCurrentPage] = useState(initialPage);

  const hasMoreMovies = movies.length > currentPage * count;
  const visibleMovies = movies.slice(0, currentPage * count);

  function handleMoreClick() {
    setCurrentPage((prev) => prev + step);
  }

  useEffect(() => {
    let waiting = false;
    function handleResize() {
      if (!waiting) {
        setPageWidth(window.innerWidth);
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, 1000);
      }
    }
    window.addEventListener('resize', handleResize, false);
    return () => {
      window.removeEventListener('resize', handleResize, false);
    };
  }, []);

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [movies.length]);

  return (
    <section className={`movies-card-list ${hasMoreMovies ? 'movies-card-list_infinite' : ''}`}>
      {isLoading && <Preloader />}
      {!isLoading && movies.length === 0 && (
        <p className="movies-card-list__text">Ничего не найдено</p>
      )}
      {!isLoading && movies.length > 0 && (
        <>
          <div className="movies-card-list__container">
            {visibleMovies.map((item) => (
              <MoviesCard
                key={item._id || item.movieId}
                {...item}
                onAddMovie={onAddMovie}
                onDeleteMovie={onDeleteMovie}
              />
            ))}
          </div>
          {hasMoreMovies && (
            <button
              type="button"
              className="movies-card-list__button"
              onClick={handleMoreClick}>
              Ещё
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
