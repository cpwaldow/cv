import './App.css';
import About from './components/About';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <About />
        <WorkExperience />
      </main>
    </>
  );
}

export default App;
