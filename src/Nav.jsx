import React, { useEffect, useState } from "react";
import logo from './assets/Logo.png';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './Nav.css';

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "#242424";
  });

  useEffect(() => {
    document.body.className = theme;
    const setCustomStyles = (theme) => {
      if (theme === "light") {
        document.querySelector('i').className = 'bi bi-sun';
        document.querySelector(':root').style.backgroundColor = 'white'; 
        document.querySelector('.navigation').style.backgroundColor = '#f0f3f4';
        const experienceCard = document.querySelectorAll('.experience-card');
        experienceCard.forEach(element => {
            element.style.backgroundColor = '#f0f3f4';
            element.style.border = '0px';
        });
        const educationCard = document.querySelectorAll('.education-card');
        educationCard.forEach(element => {
            element.style.backgroundColor = '#f0f3f4';
            element.style.border = '0px';
        });
        const projectCard = document.querySelectorAll('.project-card');
        projectCard.forEach(element => {
            element.style.backgroundColor = '#f0f3f4';
            element.style.border = '0px';
        });
        const titles = document.querySelectorAll('h1');
        titles.forEach(element => {
            element.style.color = '#4000ff';
        });
        const subtitles = document.querySelectorAll('h2');
        subtitles.forEach(element => {
            element.style.color = 'black';
        });
        const titlesH3 = document.querySelectorAll('h3');
        titlesH3.forEach(element => {
            element.style.color = 'black';
        });
        const titlesH4 = document.querySelectorAll('h4');
        titlesH4.forEach(element => {
            element.style.color = 'black';
        });
        const sections = document.querySelectorAll('a');
        sections.forEach(element => {
            element.style.color = 'black';
        });
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(element => {
            element.style.color = 'black';
        });
        const listOfTechs = document.querySelectorAll('.technology');
        listOfTechs.forEach(element => {
            element.style.background = '#4000ff';
            element.style.color = 'white';
        });
        const projectTitles = document.querySelectorAll('.project-title');
        projectTitles.forEach(element => {
            element.style.color = '#4000ff';
        });
        const inputs = document.querySelectorAll('input');
        inputs.forEach(element => {
            element.style.backgroundColor = '#f0f3f4';
            element.style.borderColor = 'black';
        });
        document.getElementById('message').style.backgroundColor = '#f0f3f4';
        document.getElementById('message').style.borderColor = 'black'
        document.getElementById('resume-link').style.color = '';
      } else {
        document.querySelector('i').className = 'bi bi-moon';
        document.querySelector(':root').style.backgroundColor = '#242424'; 
        document.querySelector('.navigation').style.backgroundColor = '#434343';
        const experienceCard = document.querySelectorAll('.experience-card');
        experienceCard.forEach(element => {
            element.style.backgroundColor = 'rgb(68, 65, 65)';
        });
        const educationCard = document.querySelectorAll('.education-card');
        educationCard.forEach(element => {
            element.style.backgroundColor = 'rgb(68, 65, 65)';
        });
        const projectCard = document.querySelectorAll('.project-card');
        projectCard.forEach(element => {
            element.style.backgroundColor = 'rgb(68, 65, 65)';
        });
        const titles = document.querySelectorAll('h1');
        titles.forEach(element => {
            element.style.color = '#D356C2';
        });
        const subtitles = document.querySelectorAll('h2');
        subtitles.forEach(element => {
            element.style.color = 'white';
        });
        const titlesH3 = document.querySelectorAll('h3');
        titlesH3.forEach(element => {
            element.style.color = 'white';
        });
        const titlesH4 = document.querySelectorAll('h4');
        titlesH4.forEach(element => {
            element.style.color = 'white';
        });
        const sections = document.querySelectorAll('a');
        sections.forEach(element => {
            element.style.color = 'white';
        });
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(element => {
            element.style.color = 'white';
        });
        const listOfTechs = document.querySelectorAll('.technology');
        listOfTechs.forEach(element => {
            element.style.backgroundColor = '#D356C2';
        });
        const projectTitles = document.querySelectorAll('.project-title');
        projectTitles.forEach(element => {
            element.style.color = '#D356C2';
        });
        const inputs = document.querySelectorAll('input');
        inputs.forEach(element => {
            element.style.backgroundColor = '#434343';
            element.style.borderColor = 'white';
        });
        document.getElementById('message').style.backgroundColor = '#434343';
        document.getElementById('message').style.borderColor = 'white'
        document.getElementById('resume-link').style.color = '#D356C2';
      }
    };

    setCustomStyles(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "#242424" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <div className="navigation">
        <div className="logoDisplay" onClick={() => window.location.replace("/#presentation")}>
          <img className="logo" alt="Logo" src={logo} />
        </div>
        <div className="sections">
          <a id="about-section" onClick={() => window.location.replace("/#about")}>About</a>
          <a id="technologies-section" onClick={() => window.location.replace("/#technologies")}>Technologies</a>
          <a id="experience-section" onClick={() => window.location.replace("/#experience")}>Experience</a>
          <a id="education-section" onClick={() => window.location.replace("/#education")}>Education</a>
          <a id="projects-section" onClick={() => window.location.replace("/#projects")}>Projects</a>
          <a id="contact-section" onClick={() => window.location.replace("/#contact")}>Contact</a>
        </div>
        <label className="toggle-switch">
          <input type="checkbox" checked={theme === "light"} onChange={toggleTheme} />
          <span className="slider">
            <i className={`bi ${theme === "light" ? "bi-moon" : "bi-sun"}`}></i>
          </span>
        </label>
      </div>
    </div>
  );
};

export default App;