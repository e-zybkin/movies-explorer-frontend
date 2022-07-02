import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList(props) {
  const location = useLocation();
  
  return(
    <section className={`cards-grid section ${location.pathname === '/saved-movies' ? 'cards-grid_type_saved' : ''}`}>
      {props.cards.map((card, i) => (
        <MoviesCard
          key={card._id}
          poster={card.poster}
          name={card.name}
          time={card.time}
        />
      ))}
    </section>
  );

}

export default MoviesCardList;
