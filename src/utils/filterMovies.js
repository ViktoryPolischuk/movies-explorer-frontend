const SHORT_MOVIE_DURATION = 40;

function filterMovies(movies, searchQuery, isShortMovie) {
  return movies
    .filter(({ nameRU, nameEN }) => {
      const search = searchQuery.toLowerCase();
      return nameRU.toLowerCase().includes(search) || nameEN.toLowerCase().includes(search);
    })
    .filter(({ duration }) => !isShortMovie || duration <= SHORT_MOVIE_DURATION);
}

export default filterMovies;
