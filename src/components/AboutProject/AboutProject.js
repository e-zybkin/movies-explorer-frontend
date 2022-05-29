import './AboutProject.css';

function Promo() {
  return(
    <section className="about-project section" id="aboutProject">
      <h2 className='about-project__title section__title'>О проекте</h2>
      <div className='about-project__grid'>
        <h3 className='about-project__grid-title'>Дипломный проект включал 5 этапов</h3>
        <h3 className='about-project__grid-title'>На выполнение диплома ушло 5 недель</h3>
        <p className='about-project__grid-text'>
          Составление плана, работу над бэкендом,
          вёрстку, добавление функциональности и
          финальные доработки.
        </p>
        <p className='about-project__grid-text'>
          У каждого этапа был мягкий и жёсткий дедлайн,
          которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className='about-project__graphic'>
        <p className='about-project__graphic-text'>1 неделя</p>
        <p className='about-project__graphic-text'>4 недели</p>
        <p className='about-project__graphic-text'>Back-end</p>
        <p className='about-project__graphic-text'>Front-end</p>
      </div>
    </section>
  );
}

export default Promo;
