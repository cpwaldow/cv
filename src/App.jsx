import './App.css';
import About from './components/About';
import Education from './components/Education';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <About />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
      </main>
      <footer className='container footer'>
        <h4>&copy; {new Date().getFullYear()}</h4>
      </footer>
    </>
  );
}

export default App;
