import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Volunteer from './components/Volunteer';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './constants/data';
import './styles/global.css';

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="App">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <About t={t} lang={lang} />
      <Education t={t} lang={lang} />
      <Skills t={t} />
      <Projects t={t} lang={lang} />
      <Volunteer t={t} lang={lang} />
      <Languages t={t} lang={lang} />
      <Contact t={t} />
      <Footer />
    </div>
  );
}

export default App;
