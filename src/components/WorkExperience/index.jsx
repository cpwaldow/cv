import './work-experience.css';
import { experiences } from '../../utils/experience';
import XpInfo from '../XpInfo';
import SubTitle from '../SubTitle';

const WorkExperience = () => {
  return (
    <section className='work-experience__container'>
      <SubTitle subtitle='Experiência Profissional' />
      {experiences.map((xp) => (
        <XpInfo info={xp} key={xp.date} />
      ))}
    </section>
  );
};

export default WorkExperience;
