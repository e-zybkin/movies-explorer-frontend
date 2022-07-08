import './Techs.css';

function Techs() {
  return(
    <section className='techs section paddings'>
      <h2 className='techs__title section__title'>Технологии</h2>
      <h2 className='techs__name'>7 технологий</h2>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.
      </p>
      <div className='techs__grid'>
        <p className='techs__grid-text'>HTML</p>
        <p className='techs__grid-text'>CSS</p>
        <p className='techs__grid-text'>JS</p>
        <p className='techs__grid-text'>React</p>
        <p className='techs__grid-text'>Git</p>
        <p className='techs__grid-text'>Express.js</p>
        <p className='techs__grid-text'>mongoDB</p>
      </div>
    </section>
  );
}

export default Techs;
