import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Footer from "../../components/Footer/Footer";
import thumbnail from "../../images/card-example.jpg";

const movies = [...new Array(3)].map((item, index) => ({
  _id: index,
  nameRU: "33 слова о дизайне",
  duration: "1ч 47м",
  owner: "1c29f760-47d2-497d-ab82-dded67472c83",
  thumbnail
}))

function SavedMovies() {
  return (
    <>
      <Header isLanding={false} />
      <main>
        <SearchForm />
        <MoviesCardList movies={movies} withDeleteButton />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
