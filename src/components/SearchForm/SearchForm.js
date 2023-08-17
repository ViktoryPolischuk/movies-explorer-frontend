import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className="search-form">
        <label className="search-form__field">
            <input className="search-form__input" placeholder="Фильм" required />
            <button className="search-form__button" type="submit" />
        </label>
        <div className="search__checkbox-container">
          <FilterCheckbox />
        </div>
    </form>
  );
}

export default SearchForm;
