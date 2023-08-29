import { useRef } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({
  searchQuery,
  isShortMovie,
  onSearch,
}) {
  const input = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(input.current.value, isShortMovie);
  }

  function handleChange(isShort) {
    onSearch(input.current.value, isShort);
  }

  return (
    <section>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__field">
          <input
            ref={input}
            className="search-form__input"
            placeholder="Фильм"
            defaultValue={searchQuery}
          />
          <button className="search-form__button" type="submit" aria-label="Искать" />
        </div>
        <div className="search-form__checkbox-container">
          <FilterCheckbox value={isShortMovie} onChange={handleChange} />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
