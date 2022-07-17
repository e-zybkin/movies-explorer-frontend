import './Footer.css';

function Footer() {
  return(
    <footer className="footer section">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__info">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()}
        </p>
        <div className='footer__links'>
          <a
            className='footer__link buttons'
            href='https://practicum.yandex.ru/'
            target='_blank'
            rel='noreferrer'
          >Яндекс.Практикум</a>

          <a
            className='footer__link buttons'
            href='https://github.com/e-zybkin'
            target='_blank'
            rel='noreferrer'
          >Github</a>

          <a
            className='footer__link buttons'
            href='https://vk.com/lildev0171'
            target='_blank'
            rel='noreferrer'
          >ВКонтакте</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
