import React from 'react';
import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import { useLocation } from 'react-router-dom';

function SearchForm(props) {
  const location = useLocation();
  const [research, setResearch] = React.useState('');
  const [isCheckBoxActiv, setIsCheckBoxActive] = React.useState(false);
  const [isSearchErrorVisible, setIsSearchErrorVisible] = React.useState(false);

  React.useEffect(() => {
    if(location.pathname === '/movies') {
      const localResearch = localStorage.getItem('researchAllMovies');
      if(localResearch) {
        try {
          setResearch(JSON.parse(localResearch));
        } catch (err) {
          console.log(err)
        }
      }
    }
  }, [])

  function handleSearchChange(e) {
    setResearch(e.target.value)
    setIsSearchErrorVisible(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (research.length > 0) {
      setIsSearchErrorVisible(false);
      props.onSearch({
        research,
        checkBoxState: isCheckBoxActiv,
      })
    } else {
      setIsSearchErrorVisible(true);
    }
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
              value={research || ''}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className='search__button buttons'
            >Найти</button>
          </div>
          <p className={`search__error ${isSearchErrorVisible ? 'search__error_visible' : ''}`}>Нужно ввести ключевое слово</p>
          <FilterCheckBox
            handleCheckBoxClick={handleCheckBoxClick}
            isCheckBoxActive={isCheckBoxActiv}
            setIsCheckBoxActive={setIsCheckBoxActive}
          />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
