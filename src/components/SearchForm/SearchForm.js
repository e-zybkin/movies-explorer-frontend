import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

function SearchForm() {
  return(
    <section className='search section'>
      <div className='seacrh__cover'>
        <form className='search__form'>
          <div className='search__box'>
            <input
              name="search"
              placeholder="Фильм"
              type="search"
              className='search__input'
              required
            />
            <button
              type="submit"
              className='search__button buttons'
            >Найти</button>
          </div>
          <FilterCheckBox />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
