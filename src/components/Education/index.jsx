import SubTitle from '../SubTitle';
import './education.css';

const Education = () => {
  return (
    <section className='education__container'>
      <section className='education__infos'>
        <SubTitle subtitle='Educação' />
        <div className='education__university-date'>
          <h3>Descomplica Faculdade Digital</h3>
          <p>2023 - 2026</p>
        </div>
        <p>Bacharelado em Sistemas de Informação</p>
      </section>
      <section className='education__infos'>
        <div className='education__university-date'>
          <h3>Universidade Paulista</h3>
          <p>2014 - 2017</p>
        </div>
        <p>Bacharel em Comunicação Social - Publicidade e Propaganda</p>
      </section>
    </section>
  );
};

export default Education;
