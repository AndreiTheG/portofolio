import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/Logo.png';
import Nav from './Nav';
import Presentation from './Presentation';
import About from './About';
import Technologies from './Technologies';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import {analytics} from './firebaseConfig';

function App() {
  React.useEffect(() => {
    if (analytics) {
      console.log("Firebase Analytics initialized:", analytics);
    } else {
      console.warn("Firebase Analytics is not available in this environment.");
    }
  }, []);

  return (
    <>
      <Nav/>
      <Presentation/>
      <About/>
      <Technologies/>
      <Experience/>
      <Education/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App