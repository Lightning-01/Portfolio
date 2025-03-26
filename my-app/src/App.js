import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Portfolio from './components/projects/Portfolio';

const App = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home />
        <Skills />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
