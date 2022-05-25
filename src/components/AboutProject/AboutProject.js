import './AboutProject.css';

function Promo(props) {
  return(
    <section className="about-project" id="aboutProject">
      <h2>О проекте</h2>
      <div>
        <h3>Дипломный проект включал 5 этапов</h3>
        <p>
          Составление плана, работу над бэкендом,
          вёрстку, добавление функциональности и
          финальные доработки.
        </p>
        <h3>На выполнение диплома ушло 5 недель</h3>
        <p>
          У каждого этапа был мягкий и жёсткий дедлайн,
          которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div>
        <p>1 неделя</p>
        <p>Back-end</p>
        <p>4 недели</p>
        <p>Front-end</p>
      </div>
    </section>
  );
}

export default Promo;
