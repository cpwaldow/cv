import './xp-info.css';

const XpInfo = ({ info }) => {
  const { company, title, date, description } = info;
  return (
    <section className='xp-info__container'>
      <div className='xp-info__company-date xp-info--small-margin-bt'>
        <h3>{company}</h3>
        <p>{date}</p>
      </div>
      <h4 className='xp-info--small-margin-bt xp-info__job-title'>{title}</h4>
      <p className='xp-info__job-description'>{description}</p>
    </section>
  );
};

export default XpInfo;
