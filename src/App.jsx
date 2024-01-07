import './App.css';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <About />
      </main>
    </>
  );
}

export default App;
