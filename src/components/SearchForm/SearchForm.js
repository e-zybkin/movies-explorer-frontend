import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import searchIcon from '../../images/magnifier.svg';

function SearchForm() {
  return(
    <section className='search section'>
      <form className='search__form'>
        <div className='search__box'>
          <input
            name="search"
            placeholder="Фильм"
            type="search"
            className='search__input'
          />
          <button
            type="submit"
            className='search__button buttons'
          >Найти</button>
        </div>
        <FilterCheckBox />
      </form>
    </section>
  );
}

export default SearchForm;
