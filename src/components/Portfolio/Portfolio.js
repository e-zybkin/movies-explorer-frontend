import './Portfolio.css';
import pointer from '../../images/pointer.svg'

function Portfolio() {
  return(
    <section className='portfolio'>
      <h5 className='portfolio__title'>Портфолио</h5>
      <a
        className='portfolio__link buttons'
        href='https://github.com/e-zybkin/how-to-learn'
        target='_blank'
        rel="noreferrer"
      >Статичный сайт
        <img
          className='portfolio__link-pic'
          src={pointer}
          alt='стрелочка ссылки'
        />
      </a>

      <a
        className='portfolio__link buttons'
        href='https://github.com/e-zybkin/russian-travel'
        target='_blank'
        rel="noreferrer"
      >Адаптивный сайт
        <img
          className='portfolio__link-pic'
          src={pointer}
          alt='стрелочка ссылки'
        />
      </a>

      <a
        className='portfolio__link buttons'
        href='https://github.com/e-zybkin/react-mesto-api-full'
        target='_blank'
        rel="noreferrer"
      >Одностраничное приложение
        <img
          className='portfolio__link-pic'
          src={pointer}
          alt='стрелочка ссылки'
        />
      </a>
    </section>
  )
}

export default Portfolio;
