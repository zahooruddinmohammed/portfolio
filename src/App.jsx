import React from 'react'
import Hero from './Sections/Hero/Hero';
import './App.css';
import Projects from './Sections/Projects/Projects';
import Skills from './Sections/Skills/Skills';
import Contact from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Footer';
import Certification from './Sections/Certifications/Certification';
function App(){
  
  return (
    <>
      <Hero />
      <Projects/>
      <Skills/>
      <Certification/>
      <Contact/>
      <Footer/>
    </>
  );
}
export default App