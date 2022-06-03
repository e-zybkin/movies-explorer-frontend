import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return(
    <section className='cards-grid section'>
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
