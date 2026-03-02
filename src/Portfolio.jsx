import { useEffect, useState } from 'react';
import About from './About';
import "./App.css";
import Certifications from './Certifications';
import Contact from './Contact';
import Dock from './Dock'; // Ensure this is imported
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';

const Portfolio = () => {
  // 1. Initialize state (defaulting to dark for your futuristic aesthetic)
  const [darkMode, setDarkMode] = useState(true);

  // 2. This effect runs whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    /* 3. Use dynamic classes to change the background and text colors */
    <div className={`min-h-screen transition-colors duration-500 font-sans relative
            ${darkMode ? 'bg-[#020617] text-white' : 'bg-slate-50 text-gray-900'}`}>

      <Header darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Resume darkMode={darkMode}/>
      <Certifications darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>

      {/* 4. Pass the state and the toggle function to the Dock */}
      <Dock darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default Portfolio;