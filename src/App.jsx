import './App.css';
import About from './components/About';
import Education from './components/Education';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <About />
        <WorkExperience />
        <Education />
      </main>
    </>
  );
}

export default App;
