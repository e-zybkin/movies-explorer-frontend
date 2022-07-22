import React from 'react';
import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

function SearchForm(props) {
  const [research, setResearch] = React.useState('');
  const [isCheckBoxActiv, setIsCheckBoxActive] = React.useState(false);

  function handleSearchChange(e) {
    setResearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch({
      research,
      checkBoxState: isCheckBoxActiv,
    })
  }

  function handleCheckBoxClick () {
    setIsCheckBoxActive(!isCheckBoxActiv)
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
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className='search__button buttons'
            >Найти</button>
          </div>
          <FilterCheckBox
            handleCheckBoxClick={handleCheckBoxClick}
            isCheckBoxActive={isCheckBoxActiv}
          />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
