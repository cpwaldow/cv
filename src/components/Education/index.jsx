import SubTitle from '../SubTitle';
import './education.css';

const Education = () => {
  return (
    <section className='education__container'>
      <section className='education__infos'>
        <SubTitle subtitle='Educação' />
        <div className='education__university-date'>
          <h3>Bacharel em Sistemas de Informação</h3>
          <p>2023 - 2026</p>
        </div>
        <p>Descomplica Faculdade Digital</p>
      </section>
      <section className='education__infos'>
        <div className='education__university-date'>
          <h3>Bacharel em Comunicação Social - Publicidade e Propaganda</h3>
          <p>2014 - 2017</p>
        </div>
        <p>Universidade Paulista</p>
      </section>
    </section>
  );
};

export default Education;
