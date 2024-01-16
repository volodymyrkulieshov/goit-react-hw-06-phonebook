import css from './Filter.module.css';
const Filter = ({ value, changeFilter }) => {
  return (
    <form className={css.filterForm}>
      <label className={css.filterLabel}>
        Find contacts by name <br />
        <input
          className={css.filterInput}
          type="text"
          value={value}
          onChange={changeFilter}
          placeholder="Search"
        />
      </label>
    </form>
  );
};

export default Filter;
