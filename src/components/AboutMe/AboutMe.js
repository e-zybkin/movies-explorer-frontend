import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import myPhoto from '../../images/me.jpg';

function AboutMe() {
  return(
    <section className='about-me section paddings'>
      <h2 className='about-me__title section__title'>Студент</h2>
      <div className='about-me__box'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Евгений</h3>
          <h4 className='about-me__status'>Фронтенд-разработчик, 20 лет</h4>
          <p className='about-me__text'>
            Ещё год назад я мало
            что понимал в мире программирования, слабо представлял,
            кем хочу стать и чем буду заниматься. Но потом я открыл для себя мир
            фронтенд-разработки и понял, что это моё. Друзья посоветовали мне
            попробовать Яндекс.Практикум, и вот курс в направлении веб-разработки пройден.
            Я многому научился и готов учиться дальше, усердно работать,
            чтобы стать по-настоящему востербованным специалистом.
          </p>
          <a
            className='about-me__link buttons'
            href='https://vk.com/lildev0171'
            target='_blank'
            rel="noreferrer"
          >ВКонтакте</a>
          <a
            className='about-me__link buttons'
            href='https://github.com/e-zybkin'
            target='_blank'
            rel='noreferrer'
          >Github</a>
        </div>
        <img
          className='about-me__photo'
          src={myPhoto}
          alt='Моя фотография'
        />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
