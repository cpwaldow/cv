import { BsLink45Deg } from 'react-icons/bs';
import './xp-info.css';

const XpInfo = ({ info }) => {
  const { company, title, date, description, url } = info;
  return (
    <section className='xp-info__container'>
      <div className='xp-info__company-date xp-info--small-margin-bt'>
        <a href={url} target='_blank' className='xp-info__link'>
          <BsLink45Deg /> {company}
        </a>
        <p>{date}</p>
      </div>
      <h3 className='xp-info--small-margin-bt xp-info__job-title'>{title}</h3>
      <p className='xp-info__job-description'>{description}</p>
    </section>
  );
};

export default XpInfo;
