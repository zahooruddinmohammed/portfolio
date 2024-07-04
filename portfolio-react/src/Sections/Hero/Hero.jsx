import React from 'react';
import heroImg from '../../assets/444_1938.jpeg';
import styles from './HeroStyles.module.css';
import linkedInLight from '../../assets/linkedin-light.svg';
import LinkedInDark from '../../assets/linkedin-dark.svg';
import GitHubDark from '../../assets/github-dark.svg';

import GitHubLight from '../../assets/github-light.svg';
import CV from '../../assets/zahoor0624.pdf';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import {useTheme} from '../../common/ThemeContext';




function Hero() {

    const {theme,toggleTheme} = useTheme();
    const themeIcon = theme === 'light'? sun:moon;
    const LinkedInIcon = theme === 'light'? linkedInLight:LinkedInDark;
    const GitHubIcon = theme === 'light'? GitHubLight:GitHubDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}> 
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Zahoor"
        />
        <img 
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}/> 
      </div>
      <div className={styles.info}>
        <h1>Zahooruddin Zohaib <br/> Mohammed </h1>
        <h2>Front-end Developer</h2>
        <span>
            <a href='https://www.linkedin.com/in/zahooruddin/' target='_blank'>
                <img src={LinkedInIcon} alt="LinkedIn Icon" />
            </a>
            <a href='https://github.com/dashboard' target='_blank'>
                <img src={GitHubIcon} alt="GitHub Icon" />
            </a>
            
        </span>
        <p className={styles.description} >With a passion for developing modren React web apps for commercial business.</p>
        <a href= {CV} download>
            <button  className='hover' >Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
