import React from 'react';
import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

function SearchForm(props) {
  const [research, setResearch] = React.useState('');

  function handleSearchChange(e) {
    setResearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch({
      data: research,
    })
  }

  return(
    <section className='search section'>
      <div className='seacrh__cover'>
        <form
          className='search__form'
          onSubmit={handleSubmit}
        >
          <div className='search__box'>
            <input
              name="search"
              placeholder="Фильм"
              type="search"
              className='search__input'
              required
              onChange={handleSearchChange}
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
