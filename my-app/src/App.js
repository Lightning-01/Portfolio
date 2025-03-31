import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/projects/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Chatbot from './components/chatbot/Chatbot';

const App = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
