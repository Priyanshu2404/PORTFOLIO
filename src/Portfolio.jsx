import { useEffect, useState } from 'react';
import About from './About';
import "./App.css";
import Certifications from './Certifications';
import Contact from './Contact';
import Dock from './Dock';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';
// 1. Import the new AIChatbot component
import AIChatbot from './AIChatbot';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans relative
            ${darkMode ? 'bg-[#020617] text-white' : 'bg-slate-50 text-gray-900'}`}>

      <Header darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Resume darkMode={darkMode} />
      <Certifications darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />

      {/* 2. Add the AIChatbot here (placed before Dock so it layers correctly) */}
      <AIChatbot darkMode={darkMode} />

      <Dock darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default Portfolio;