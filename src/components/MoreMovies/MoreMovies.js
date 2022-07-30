import React from 'react';
import './MoreMovies.css';

function MoreMovies(props) {
  const [isButtonVisible, setIsButtonVisible] = React.useState(false)

  React.useEffect(() => {
    if (localStorage.getItem('researchAllMovies')) {
      if (props.filteredMovies && props.filteredMovies.length > 0) {
        if (props.moviesAtPage >= props.filteredMovies.length) {
          setIsButtonVisible(false);
        } else {
          setIsButtonVisible(true);
        }
      } else if (props.filteredMovies.length === 0) {
        setIsButtonVisible(false);
      }
    }
  }, [props.filteredMovies, props.moviesAtPage]);

  return(
    <section className='more section'>
      {isButtonVisible &&
        <button
          type="button"
          className='more__button buttons'
          onClick={props.handleMoreMoviesClick}
        >Ещё</button>
      }
    </section>
  );
}

export default MoreMovies;
