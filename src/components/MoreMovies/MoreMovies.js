import React from 'react';
import './MoreMovies.css';
import { windowConfig } from '../../utils/constants';

function MoreMovies(props) {
  const [isButtonVisible, setIsButtonVisible] = React.useState(false)

  React.useEffect(() => {
    if (localStorage.getItem('research')) {
      if (props.filteredMovies && props.filteredMovies.length > 0) {
        if (props.moviesAtPage >= props.filteredMovies.length) {
          setIsButtonVisible(false);
        } else {
          setIsButtonVisible(true);
        }
      }
    }
  });

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
