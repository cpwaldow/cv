import SubTitle from '../SubTitle';
import './skills.css';

const Skills = () => {
  const skillsArr = ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS'];
  return (
    <>
      <SubTitle subtitle='Habilidades' />
      <section className='skills__info--container'>
        {skillsArr.map((skill, index) => (
          <p key={skill}>{skill}</p>
        ))}
      </section>
    </>
  );
};

export default Skills;
