import SubTitle from '../SubTitle';
import './about.css';

const About = () => {
  return (
    <section className='about__container'>
      <SubTitle subtitle='Sobre' />
      <p className='about--description'>
        Desenvolvedor Front-end, com 4 anos de experiência, focado em automação
        e manutenção de projetos. Conhecimento em HTML, CSS, JavaScript, React,
        TypeScript e ferramentas como Github Actions, ESLint, Cypress, Jest e
        React Testing Library. Tenho experiência em SEO e Google Tag Manager.
      </p>
    </section>
  );
};

export default About;
