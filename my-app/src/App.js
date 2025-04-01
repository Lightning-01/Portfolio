import React, {useState} from "react";
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/projects/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Chatbot from './components/chatbot/Chatbot';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  
  // Function to update menu state
  const handleMenuToggle = (isActive) => {
    setIsMenuActive(isActive);
  };

  return (
    <>
      <Header onMenuToggle={handleMenuToggle} />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Chatbot isMenuActive={isMenuActive} />
    </>
  );
}

export default App;
