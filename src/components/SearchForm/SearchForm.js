import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__field">
        <input className="search-form__input" placeholder="Фильм" required />
        <button className="search-form__button" type="submit" aria-label="Искать" />
      </div>
      <div className="search-form__checkbox-container">
        <FilterCheckbox />
      </div>
    </form>
  );
}

export default SearchForm;
