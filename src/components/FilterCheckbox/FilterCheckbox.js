import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
      <label className="filter-checkbox">
        <input className="filter-checkbox__input" type="checkbox" />
        <span className="filter-checkbox__toggle" />
        <span className="filter-checkbox__label">Короткометражки</span>
      </label>
  );
}

export default FilterCheckbox;
