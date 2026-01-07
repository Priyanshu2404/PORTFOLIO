import About from './About';
import "./App.css";
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';

const Portfolio=()=>{
  return(
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <About />
      <Resume/>
      <Certifications/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Portfolio;
