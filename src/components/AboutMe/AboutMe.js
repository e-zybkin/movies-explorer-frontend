import './AboutMe.css';
import myPhoto from '../../images/me.jpg';

function AboutMe() {
  return(
    <section className='about-me section'>
      <h2 className='about-me__title section__title'>Студент</h2>
      <div className='about-me__box'>
        <div className='about-me__info'>
          <h3>Евгений</h3>
          <h4></h4>
          <p></p>
          <a
            className=''
            href='https://vk.com/lildev0171'
            target='_blank'
            rel="noreferrer"
          >ВКонтакте</a>
          <a
            className=''
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
    </section>
  );
}

export default AboutMe;
