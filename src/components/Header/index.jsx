import { BsGlobe, BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import './Header.css';

const Header = () => {
  return (
    <header className='header--container'>
      <section>
        <h1 className='header--title'>Carlos Eduardo</h1>
        <p className='header--description'>
          Desenvolvedor Front-end focado em construir produtos com atenção extra
          aos detalhes
        </p>
        <a
          href='https://www.google.com/maps/place/S%C3%A3o+Paulo'
          target='_blank'
          className='header--location'
        >
          <BsGlobe /> São Paulo, Brasil
        </a>
        <nav className='header__nav'>
          <a href='mailto:cpwaldow@gmail.com' aria-label='email'>
            <MdOutlineEmail />
          </a>
          <a
            href='https://github.com/cpwaldow'
            target='_blank'
            aria-label='github'
          >
            <BsGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/carlos-waldow/'
            target='_blank'
            aria-label='linkedin'
          >
            <BsLinkedin />
          </a>
        </nav>
      </section>

      <img
        src='https://avatars.githubusercontent.com/u/59023543?v=4'
        alt='Carlos Eduardo'
        className='header__img'
      />
    </header>
  );
};

export default Header;
