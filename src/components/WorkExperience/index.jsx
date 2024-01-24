import './work-experience.css';
import { experiences } from '../../utils/experience';
import XpInfo from '../XpInfo';

const WorkExperience = () => {
  return (
    <section className='work-experience__container'>
      <h2 className='work-experience__title'>Experiência Profissional</h2>
      {experiences.map((xp) => (
        <XpInfo info={xp} key={xp.date} />
      ))}
    </section>
  );
};

export default WorkExperience;
